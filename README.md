# Uncertainty, Explainability & Fairness

This repository is a Hugo site for posts about uncertainty, explainability, and fairness.

## Content structure

Use separate topic folders in `content/`:

- `content/uncertainty/` for posts about uncertainty and probability
- `content/explainability/` for posts about explainable AI and interpretability
- `content/fairness/` for posts about fairness, bias, and ethics

Each topic folder can contain an `_index.md` for the topic landing page and Markdown files for individual posts.

## Creating a new post

Use Hugo to create a new post in the correct topic folder:

```bash
hugo new uncertainty/my-new-post.md
```

Then update the front matter with the title, date, categories, and tags, and set `draft = false` when the post is ready.

## Previewing the site

Run Hugo in development mode:

```bash
hugo server
```

Open the local address shown in the terminal to preview your site.
