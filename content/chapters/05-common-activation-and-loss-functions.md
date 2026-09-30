---
title: "Common Activation and Loss Functions"
url: "/chapters/04-mathematical-basics/common-activation-and-loss-functions/"
weight: 0
subpage: true
hiddenInHomeList: true
summary: "Interactive plots of common activation and loss functions used in machine learning."
---

Activation functions transform a model's scores. Loss functions quantify prediction error. The plots below update as you adjust each function's parameter.

## Activation functions

### Sigmoid

The sigmoid maps any real-valued input to a value between 0 and 1. Its steepness parameter $k$ controls how quickly the output changes around zero.

$$\sigma(x) = \frac{1}{1 + e^{-kx}}$$

{{< function-plot function="sigmoid" parameter="steepness" label="Steepness k" min="0.25" max="4" step="0.25" value="1" xMin="-6" xMax="6" >}}

### Hyperbolic tangent

The hyperbolic tangent maps inputs to the range $(-1, 1)$. The parameter $k$ controls its steepness.

$$\tanh_k(x) = \tanh(kx)$$

{{< function-plot function="tanh" parameter="steepness" label="Steepness k" min="0.25" max="4" step="0.25" value="1" xMin="-4" xMax="4" >}}

### ReLU

The rectified linear unit (ReLU) returns zero for negative inputs and the input itself for positive inputs. Standard ReLU has no adjustable parameter.

$$\operatorname{ReLU}(x) = \max(0, x)$$

{{< function-plot function="relu" xMin="-5" xMax="5" >}}

### Leaky ReLU

Leaky ReLU keeps a small, adjustable slope $\alpha$ for negative inputs instead of setting them to zero.

$$\operatorname{LeakyReLU}(x) = \begin{cases}x & x \ge 0 \\ \alpha x & x < 0\end{cases}$$

{{< function-plot function="leaky-relu" parameter="alpha" label="Negative slope α" min="0" max="1" step="0.05" value="0.1" xMin="-5" xMax="5" >}}

### Exponential linear unit

The exponential linear unit (ELU) is linear for positive inputs and approaches $-\alpha$ for negative inputs. The parameter $\alpha$ controls that negative-side limit.

$$\operatorname{ELU}(x) = \begin{cases}x & x \ge 0 \\ \alpha(e^x - 1) & x < 0\end{cases}$$

{{< function-plot function="elu" parameter="alpha" label="Alpha" min="0.25" max="3" step="0.25" value="1" xMin="-5" xMax="5" >}}

### Softmax

Softmax converts a vector of scores into probabilities that sum to 1. This plot varies one class's score $z$ while holding two other scores at zero. Temperature $T$ controls how concentrated the probabilities are.

$$\operatorname{softmax}(z_i) = \frac{e^{z_i/T}}{\sum_j e^{z_j/T}}$$

{{< function-plot function="softmax" parameter="temperature" label="Temperature T" min="0.25" max="3" step="0.25" value="1" xMin="-6" xMax="6" >}}

## Loss functions

For the MSE and MAE plots, the horizontal axis is the prediction $\hat{y}$ and the target $y$ can be changed with the slider. The Huber plot uses prediction error $e$ on the horizontal axis, with its transition threshold controlled by the slider.

### Mean squared error

Mean squared error penalizes the square of the difference between prediction and target, so larger errors receive disproportionately more weight.

$$L_{\mathrm{MSE}}(\hat{y}, y) = (\hat{y} - y)^2$$

{{< function-plot function="mse" parameter="target" label="Target y" min="-2" max="2" step="0.1" value="0" xMin="-3" xMax="3" >}}

### Mean absolute error

Mean absolute error grows linearly with the size of the prediction error and is less sensitive to outliers than squared error.

$$L_{\mathrm{MAE}}(\hat{y}, y) = |\hat{y} - y|$$

{{< function-plot function="mae" parameter="target" label="Target y" min="-2" max="2" step="0.1" value="0" xMin="-3" xMax="3" >}}

### Huber loss

Huber loss is quadratic for small errors and linear for errors larger than $\delta$. Adjusting $\delta$ changes where it transitions between the two behaviors.

$$L_{\delta}(e) = \begin{cases}\frac{1}{2}e^2 & |e| \le \delta \\ \delta(|e| - \frac{1}{2}\delta) & |e| > \delta\end{cases}$$

{{< function-plot function="huber" parameter="delta" label="Transition δ" min="0.25" max="2" step="0.25" value="1" xMin="-3" xMax="3" >}}

### Binary cross-entropy

Binary cross-entropy measures the error in a predicted probability $p$ for a binary target $y$. Use the slider to switch the true class between 0 and 1.

$$L_{\mathrm{BCE}}(p, y) = -y\log(p) - (1-y)\log(1-p)$$

{{< function-plot function="binary-cross-entropy" parameter="target" label="True class y" min="0" max="1" step="1" value="1" xMin="0.005" xMax="0.995" >}}

### Categorical cross-entropy

For a one-hot target, categorical cross-entropy is the negative logarithm of the predicted probability assigned to the correct class.

$$L_{\mathrm{CE}}(p) = -\log(p)$$

{{< function-plot function="cross-entropy" xMin="0.005" xMax="1" >}}

[Back to Mathematical Basics]({{< ref "/chapters/04-mathematical-basics.md" >}})