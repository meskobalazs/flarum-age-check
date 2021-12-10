<?php

/*
 * This file is part of webbinaro/flarum-age-check.
 *
 * Copyright (c) 2021 Eddie Webbinaro.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Webbinaro\AgeCheck;

use Flarum\Extend;
return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
    ->serializeToForum('age_yes', 'webbinaro-age-check.labels.buttons.yes',null,'webbinaro-age-check.admin.labels.buttons.yes_default')
    ->serializeToForum('age_no', 'webbinaro-age-check.labels.buttons.no',null,)
    ->serializeToForum('age_prompt', 'webbinaro-age-check.labels.messages.consent_prompt')
    ->serializeToForum('age_image', 'webbinaro-age-check.labels.messages.left_blurb_background')
    ->serializeToForum('age_message', 'webbinaro-age-check.labels.messages.left_blurb')
];
