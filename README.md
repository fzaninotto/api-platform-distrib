# API Platform Admin Tutorial

This repository is based on the [API Platform Distribution](https://api-platform.com/docs/distribution/) and showcases the customization of the admin app using various strategies.

## Install

1. Build the images

    ```bash
    docker compose build --no-cache
    ```

2. Start docker containers

    ```bash
    docker compose up -d
    ```

3. Load fixtures

    ```bash
    docker compose exec php \
        bin/console doctrine:fixtures:load
    ```

You can now browse the apps:

| URL                          | Path            | Language   | Description           |
|------------------------------|-----------------|------------|-----------------------|
| https://localhost/docs/      | api/            | PHP        | The API               |
| https://localhost/           | pwa/            | TypeScript | The Next.js application |
| https://localhost/admin/     | pwa/pages/admin/| TypeScript | The Admin             |

For more details, [read the official "Getting Started" guide](https://api-platform.com/docs/distribution/).

