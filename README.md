# Age Checker for Flarum

![License](https://img.shields.io/github/license/eddiewebb/flarum-age-check) [![Latest Stable Version](https://img.shields.io/packagist/v/webbinaro/flarum-age-check.svg)](https://packagist.org/packages/webbinaro/flarum-age-check) [![Total Downloads](https://img.shields.io/packagist/dt/webbinaro/flarum-age-check.svg)](https://packagist.org/packages/webbinaro/flarum-age-check)

A [Flarum](http://flarum.org) extension that blurs out any site content until the user accepts a legal disclaimer that you configure in the UI.

![sample user site blocked out showing modal](screenshot.png)

## Installation

Install with composer:

```sh
composer require webbinaro/flarum-age-check:"*"
```

## Updating

```sh
composer update webbinaro/flarum-age-check:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/webbinaro/flarum-age-check)
- [GitHub](https://github.com/webbinaro/flarum-age-check)
- [Discuss](https://discuss.flarum.org/d/29656-age-checker-age-verification-for-flarum-forum)
