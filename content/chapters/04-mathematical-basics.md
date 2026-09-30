---
title: "Mathematical Basics"
weight: 4
summary: "A practical refresher on the mathematical ideas used throughout machine learning."
---

This chapter introduces a few mathematical building blocks that appear throughout machine learning. The goal is to connect notation to intuition, rather than to provide a full mathematics course.

## Scalars, vectors, and matrices

A **scalar** is a single number. A **vector** is an ordered list of numbers, and a **matrix** is a rectangular array of numbers. Machine-learning inputs, model parameters, and predictions are often represented by vectors and matrices because this makes calculations over many features efficient.

For example, a linear model combines an input vector $\mathbf{x}$ and a parameter vector $\mathbf{w}$ into a score:

$$\mathbf{w}^{\mathsf{T}}\mathbf{x} + b$$

Here, $b$ is a bias term and the superscript $\mathsf{T}$ denotes a transpose, so the vector product produces a scalar.

## Functions and model outputs

A function maps an input to an output. A model first computes a score and then may transform that score into a prediction. **Activation functions** transform scores inside neural networks; **loss functions** measure how far a prediction is from its target and guide learning.

Explore interactive plots of common functions in [Common activation and loss functions]({{< ref "05-common-activation-and-loss-functions.md" >}}).

## Probability and learning

Probability describes uncertainty about outcomes. During training, a loss function provides a numerical signal that an optimizer can use to adjust model parameters. The choice of activation and loss affects the range of predictions and what kinds of errors the model is encouraged to reduce.