Healthforge Status Page
=======================

During an incident update by creating a new post in `_posts/`.

Staticus uses a couple custom frontmatter fields:
- `action` denotes the type of status message. (_incident-error_ or _incident-warning_ or _resolved_)

Staticus also looks at the `tags` frontmatter to determine the appropriate channel for the update. You can update multiple channels with the same post. Define your channels in `_data/tags.yml`.

- Any tag with `system: true` will be treated as a top-level system channel.
- Any tag with `scheduled: true` will be treated as a scheduled channel.
    - These are shown at the top of the status page.

### Example Frontmatter

```
---
layout: post
title: First bad things happening
date: 2018-07-17 11:11
action: incident-error
tags: [APIs, coffee]
---

Free form Incident body
```

Ensure date is formatted exactly like this, or it might not get picked up.