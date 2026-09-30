(() => {
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const initializePlot = (figure) => {
    const canvas = figure.querySelector("canvas");
    const context = canvas.getContext("2d");
    const control = figure.querySelector("input[type='range']");
    const output = figure.querySelector("output");
    const kind = figure.dataset.function;
    const xMin = Number(figure.dataset.xMin);
    const xMax = Number(figure.dataset.xMax);

    const valueAt = (x, parameter) => {
      switch (kind) {
        case "sigmoid":
          return 1 / (1 + Math.exp(clamp(-parameter * x, -60, 60)));
        case "tanh":
          return Math.tanh(parameter * x);
        case "relu":
          return Math.max(0, x);
        case "leaky-relu":
          return x >= 0 ? x : parameter * x;
        case "elu":
          return x >= 0 ? x : parameter * Math.expm1(clamp(x, -60, 0));
        case "softmax":
          return 1 / (1 + 2 * Math.exp(clamp(-x / parameter, -60, 60)));
        case "mse":
          return (x - parameter) ** 2;
        case "mae":
          return Math.abs(x - parameter);
        case "huber": {
          const error = Math.abs(x);
          return error <= parameter
            ? 0.5 * error ** 2
            : parameter * (error - 0.5 * parameter);
        }
        case "binary-cross-entropy": {
          const probability = clamp(x, 1e-6, 1 - 1e-6);
          return parameter === 1
            ? -Math.log(probability)
            : -Math.log(1 - probability);
        }
        case "cross-entropy":
          return -Math.log(clamp(x, 1e-6, 1));
        default:
          return 0;
      }
    };

    const draw = () => {
      const bounds = canvas.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const width = bounds.width;
      const height = bounds.height;
      const padding = { top: 16, right: 16, bottom: 34, left: 56 };
      const plotWidth = width - padding.left - padding.right;
      const plotHeight = height - padding.top - padding.bottom;
      const parameter = Number(control?.value ?? 1);
      const samples = 240;
      const points = Array.from({ length: samples + 1 }, (_, index) => {
        const x = xMin + (xMax - xMin) * index / samples;
        return { x, y: valueAt(x, parameter) };
      });

      let yMin = 0;
      let yMax = 1;
      if (kind === "tanh") {
        yMin = -1.1;
        yMax = 1.1;
      } else if (["relu", "leaky-relu", "elu"].includes(kind)) {
        yMin = Math.min(0, ...points.map((point) => point.y));
        yMax = Math.max(0, ...points.map((point) => point.y));
        const margin = Math.max((yMax - yMin) * 0.08, 0.1);
        yMin -= margin;
        yMax += margin;
      } else if (["mse", "mae", "huber", "binary-cross-entropy", "cross-entropy"].includes(kind)) {
        yMax = Math.max(...points.map((point) => point.y), 1) * 1.08;
      }

      const mapX = (x) => padding.left + (x - xMin) / (xMax - xMin) * plotWidth;
      const mapY = (y) => padding.top + (yMax - y) / (yMax - yMin) * plotHeight;

      context.clearRect(0, 0, width, height);
      context.font = "12px sans-serif";
      context.textBaseline = "middle";
      context.strokeStyle = "#dfeaf3";
      context.fillStyle = "#456586";
      context.lineWidth = 1;

      for (let tick = 0; tick <= 4; tick += 1) {
        const fraction = tick / 4;
        const y = padding.top + fraction * plotHeight;
        const value = yMax - fraction * (yMax - yMin);
        context.beginPath();
        context.moveTo(padding.left, y);
        context.lineTo(width - padding.right, y);
        context.stroke();
        context.textAlign = "right";
        context.fillText(value.toFixed(1), padding.left - 8, y);

        const x = xMin + fraction * (xMax - xMin);
        const mappedX = mapX(x);
        context.beginPath();
        context.moveTo(mappedX, padding.top);
        context.lineTo(mappedX, height - padding.bottom);
        context.stroke();
        context.textAlign = "center";
        context.fillText(x.toFixed(1), mappedX, height - padding.bottom + 16);
      }

      context.strokeStyle = "#1e5fa8";
      context.lineWidth = 2.5;
      context.lineJoin = "round";
      context.beginPath();
      points.forEach((point, index) => {
        const x = mapX(point.x);
        const y = mapY(point.y);
        if (index === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.stroke();

      context.fillStyle = "#1d2a36";
      context.textAlign = "center";
      context.fillText(
        ["mse", "mae", "huber"].includes(kind) ? "prediction or error" : "input",
        padding.left + plotWidth / 2,
        height - 5,
      );
    };

    if (control && output) {
      const update = () => {
        output.value = control.value;
        output.textContent = control.value;
        draw();
      };
      control.addEventListener("input", update);
    }

    if ("ResizeObserver" in window) {
      new ResizeObserver(draw).observe(canvas);
    } else {
      window.addEventListener("resize", draw);
    }
    draw();
  };

  document.querySelectorAll(".function-plot").forEach(initializePlot);
})();