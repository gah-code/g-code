# Contentful Content Model Plan

## 1. Blog

### Description

The `Blog` content type represents individual blog posts. It includes fields for metadata, content, and categorization.

### Fields

- **Title**

  - Type: Short text
  - Description: The title of the blog post.
  - Required: Yes

- **Slug**

  - Type: Short text
  - Description: A URL-friendly version of the title.
  - Required: Yes
  - Validation: Must be unique

- **Description**

  - Type: Long text
  - Description: A brief summary of the blog post.
  - Required: No

- **Content**

  - Type: Rich text
  - Description: The main body of the blog post.
  - Required: Yes

- **Featured Image**

  - Type: Media (Image)
  - Description: An image that represents the blog post.
  - Required: No

- **Read Time**

  - Type: Integer
  - Description: Estimated time to read the blog post in minutes.
  - Required: No

- **Tags**

  - Type: Reference (Tag)
  - Description: Tags associated with the blog post.
  - Required: No
  - Multiple: Yes

- **Publish Date**
  - Type: Date and time
  - Description: The date and time when the blog post is published.
  - Required: No

## 2. Tag

### Description

The `Tag` content type represents tags that can be assigned to blog posts for categorization.

### Fields

- **Name**

  - Type: Short text
  - Description: The name of the tag.
  - Required: Yes
  - Validation: Must be unique

- **Slug**

  - Type: Short text
  - Description: A URL-friendly version of the tag name.
  - Required: Yes
  - Validation: Must be unique

- **Description**

  - Type: Long text
  - Description: A description of what the tag represents.
  - Required: No

- **Blogs**
  - Type: Reference (Blog)
  - Description: Blogs associated with this tag.
  - Required: No
  - Multiple: Yes

