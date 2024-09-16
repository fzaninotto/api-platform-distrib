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

## Steps

This repo results from 4 successive customization strategies:

1. [Oot-of the box admin](https://github.com/fzaninotto/api-platform-distrib/tree/a3bd07fec14111fa2da753d28350c5726b6b2563)
2. [Customize with PHP attributes](https://github.com/fzaninotto/api-platform-distrib/tree/72404e2faf09065edfe374c7467eee1527d0b287)
3. [Customize The JS Code With Guessers](https://github.com/fzaninotto/api-platform-distrib/tree/0e9bba2e7ca15a4b50463c5a9be8007809977d2a)
4. [Customize The JS Code With React Admin](https://github.com/fzaninotto/api-platform-distrib/tree/cb439d6b7c9c39faa01eec0c34280ce3e27a0d7b)