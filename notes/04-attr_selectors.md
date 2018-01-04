## jQuery Attribute Selectors

`$(".song[title='Never Gonna Give You Up']")` returns all `.song` items whose `title` tags exactly match the string `"Never Gonna Give You Up"`.

#### Not: `!=`

`$(".song[title!='Never']")` returns all `.song` items except those whose `title` tags exactly match the string `"Never"`.

#### Starts with prefix: `|=`

`$(".song[title|='Never']")` returns all `.song` items whose `title` tags **start** with the string `"Never"`.

#### Contains: `*=`

`$(".song[title*='Never']")` returns all `.song` items with the string `"Never"` anywhere in the `title` tag.

#### Contains word: `~=`

`$(".song[name~='Never']")` returns all `.song` items with the word `"Never"` in the `name` tag. This would not return `.song` items with `name="Never-Gonna-Give-You-Up"`.

#### Ends with: `$=`

`$(".song[title$='up']")` returns all `.song` items with `title` tags ending in `"up"`.

#### Starts with: `^=`

`$(".song[title^='Never']")` returns all `.song` items with `title` tags starting with `"Never"`.