# Modernist-SwiftCN

> Theme for [Hexo]. Fork from [heroicyang/hexo-theme-modernist]. And it based on [modernist theme] for GitHub Pages.

For [SwiftCN.org].

## Install

```
git clone https://github.com/jkeylu/hexo-theme-modernist-swiftcn.git themes/modernist-swiftcn
```

**Modernist-SwiftCN requires Hexo 2.4 and above.**

## Enable
Modify `theme` setting in `_config.yml` to `modernist-swiftcn`.

## Update

```
cd themes/modernist-swiftcn
git pull
```

## Configuration

``` yaml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
archive_date_format: MMM DD
fancybox: true

# Comment Plugin
duoshuo_shortname:

# Miscellaneous
google_analytics:
favicon: /favicon.ico
```

- **menu** - Navigation menu
- **rss** - RSS link
- **archive_date_format** - Date format in archives page.
- **fancybox** - Enable [Fancybox]
- **duoshuo_shortname** - [Duoshuo] ID
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path

[Hexo]: http://zespia.tw/hexo/
[heroicyang/hexo-theme-modernist]: http://github.com/heroicyang/hexo-theme-modernist
[modernist theme]: https://github.com/orderedlist/modernist
[SwiftCN.org]: http://swiftcn.org/
[Duoshuo]: http://duoshuo.com
[Fancybox]: http://fancyapps.com/fancybox/
