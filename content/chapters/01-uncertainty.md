---
title: "Uncertainty"
weight: 1
summary: "An introduction to uncertainty and why it matters."
---

This chapter introduces the core concepts of uncertainty estimation and explains why it should be used as a central concept in data acquisition, modeling of data and decision-making.

## Why uncertainty matters

Uncertainty is a property of the world, the data therein, and the decision processes based on them. Uncertainty is not a weakness of a certain model. One could argue that there should not be a single machine learning network in productive systems without an uncertainty estimate.


## Types of uncertainty

Right from the beginning, there is no clear formal and consistent framework for describing uncertainty. Typically, it is divided into two types: aleatoric and epistemic. But here the first inconsistency already arises. "Aleatoric" comes from the Latin *alea* (dice), while "epistemic" stems from the Greek *episteme* (knowledge). Why on earth would anyone mix naming conventions from two completely different languages? Who does that?
It is not known. The categorization dates back to 


The typcial example for the aleatoric uncertainty is throwing a dice. No matter how hard we try there is no way in predicting the outcome. It is the inherent nature of the data - the next number on the dice - to be probabilistic. This kind of uncertainty is said to be irreducible. Epistemic uncertainty comes from the lack of knowledge. One cannot determine if a model is correct when there is no or not enough data to validate the model.



## Uncertainty in machine learning
Attempts to formalize uncertainty in machine learning are:

[What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?](https://arxiv.org/abs/1703.04977) by Alex Kendall and Yarin Gal, 2017.


[Aleatoric and epistemic uncertainty in machine learning: An introduction to concepts and methods](https://arxiv.org/abs/1910.09457) by Eyke Hüllermeier and Willem Waegeman, 2021.

[Quantifying Aleatoric and Epistemic Uncertainty with Proper Scoring Rules](https://arxiv.org/abs/2404.12215v1) by Paul Hofman, Yusuf Sale, Eyke Hüllermeier, 2024.

In the next sections we discuss those concepts.

## Mathematical description(s) of uncertainty



## Quantifying uncertainty in data
The data acquisition process itself can be mathematically described as a Data Generating Process (DGP)