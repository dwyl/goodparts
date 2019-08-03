# `goodparts`

An ESLint Plugin that _only_ allows **JavaScript the _Good_ Parts**  <br />
(_and "**Better Parts**"_) in your code so you can _ship more **reliable code**_.

[![Travis](https://img.shields.io/travis/dwyl/goodparts.svg?maxAge=2592000)](https://travis-ci.org/dwyl/goodparts)
[![dependencies Status](https://david-dm.org/dwyl/goodparts/status.svg)](https://david-dm.org/dwyl/goodparts)
[![devDependencies Status](https://david-dm.org/dwyl/goodparts/dev-status.svg)](https://david-dm.org/dwyl/goodparts?type=dev)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts/issues)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")



## *Why?*

Using JavaScript "**The _Good_ Parts**" (_abbreviated to **`"goodparts"`**_)
is the _best_ way we know <br />
how to write _simple_, _consistent_,
_predictable_ and 100% cross-browser-compatible JavaScript code.

The ***guiding principal*** of `goodparts` is:

> "***perfection*** *is* ***attained*** *not when there is nothing more to add,  
> but when there is* ***nothing more to remove***" ~
[Antoine de Saint-Exupéry](http://en.wikiquote.org/wiki/Antoine_de_Saint_Exup%C3%A9ry#Quotes)

We _agree_ that "_code is for **humans** to read_":

> "_**Programs must be written for people to read**, <br />
and only incidentally for machines to execute._" ~ Harold Abelson

> "_Any fool can write code that a computer can understand. <br />
**Good programmers write code** that **humans** can
**understand**._" ~ Martin Fowler

The 3 biggest advantages of using `goodparts` in your code:

1. [***Readability***](https://en.wikipedia.org/wiki/Readability) - using _fewer_ ECMAScript (JS) language features means
people reading your code can get to the heart of what it *does*
rather than waste time trying to understand
how its been written.
2. [***Portability***](https://en.wikipedia.org/wiki/Software_portability) -
"Old" Browsers/Devices are a _fact_, even if it's "*only a small percentage*"
of people, we _chose_ to
[*empathize*](http://www.merriam-webster.com/dictionary/empathize)
with them by writing code that ***Works Everywhere***<sup>TM</sup>.
3. ***Beginner-friendlyness*** or [***Shoshin***](https://en.wikipedia.org/wiki/Shoshin) - using _fewer_ JS features
also means a _complete_ beginner has _less_ to learn before
they _understand_ your code. This is _essential_ in Open Source
if you want to make something that _anyone_ can use/modify/extend.

## *What?*

`goodparts` is a "[linter](https://en.wikipedia.org/wiki/Lint_%28software%29)"
that _ensures_ your project's JavaScript code <br >
only contains the _subset_ of JavaScript known as "**The _Good_ Parts**". <br />
This _**guarantees**_ that
your code ***works everywhere***. (_or your money back!_)


### What _are_ "**The _Good_ Parts**"

> If you are _unfamiliar_ with JavaScript "**The _Good_ Parts**"
or need a _refresher_, <br />
please see @iteles' notes: [github.com/iteles/Javascript-the-**_Good_**-**Parts**-_**notes**_](https://github.com/iteles/Javascript-the-Good-Parts-notes)

There are _several_ videos where Douglas Crockford covers
the Why? What? and How? <br />
of JavaScript "**The _Good_ Parts**"
see: https://github.com/dwyl/goodparts/#videos

<!-- do we need this?
### *What is ESLint?*

ESLint is a Linting tool started by Nicholas C. Zakas,
it has become the _defacto_ linter in the JS community. see:
http://eslint.org/docs/about/
-->

## *How?*

First _install_ the [**NPM Package**](https://www.npmjs.com/package/goodparts)
in your Node.js/JS project:
```
$ npm install goodparts --save-dev
```

Then add the following script to your `package.json`:

```json
{
  "lint": "node_modules/.bin/goodparts path/to/files/for/linting"
}
```
> Example: [hapi-auth-jwt2/**package.json**#L68](https://github.com/dwyl/hapi-auth-jwt2/blob/5e09733c71c679633de42baa22cef615cdc81859/package.json#L68)

Now when you run the command:

```sh
npm run lint
```
You should _either_ see **no output** if there are **no linting issues** in the code:

![goodparts-no-output-means-it-passes](https://cloud.githubusercontent.com/assets/194400/20865564/fa5307a0-ba0d-11e6-86ce-cbf57fb7bcf7.png)

***or*** if there are **linting issues** in the code you should see:

![goodparts-showing-linting-errors](https://cloud.githubusercontent.com/assets/194400/20865467/09054900-ba0b-11e6-8c4d-1a2ceeea99ae.png)


### Autofix

The `goodparts` command line tool supports `eslint`'s autofix flag `--fix`.
Not _all_ errors can be autofixed, but a great deal can, simply with:

```
$ node_modules/.bin/goodparts /path/to/dir --fix
```
Example: (_fixing the linting "errors" from the example above_)

![goodparts-autofix](https://cloud.githubusercontent.com/assets/194400/20867636/446500fe-ba41-11e6-811b-3321824ec6b9.png)

> Note: the `--fix` command only fixed the missing semicolon but did not
delete the extra (_unused_) `auth` variable.


### Text Editor Linting _Plugin_?

> If this is a feature you _need_ please _tell_ us by "up-voting":
[atom plugin feature request](https://github.com/dwyl/goodparts/issues/243)

While we're working on an [atom plugin](https://github.com/dwyl/goodparts/issues/243),
you can still use `goodparts` to lint your code in your editor using the
`linter-eslint` plugin for atom. To do this, you need a `.eslintrc.js`
file in your project that reflects the `goodparts` configuration.
Luckily we have a command line option for this too!

Simply run:

```
$ node_modules/.bin/goodparts /path/to/dir --link
```
This will create a `symlink` to the goodparts configuration file
at `/path/to/dir/.eslintrc.js`, which we recommend you add it to `.gitignore` _for now_.

**Pre Commit Hook**

If you would like to add a pre-commit hook to check that your linting is up to scratch:
```
$ npm i -D pre-commit
```
Then, assuming you have added the `lint` script described above, add the following line to your `package.json`:
```json
{
  "pre-commit": ["lint"]
}
```

## Repo Badge ? [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")


If you use `goodparts` to lint your code and want to let other people know,
you can add this badge in your repo:

```js
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")

```

> If you want to know more about "Badges" see: https://github.com/dwyl/repo-badges


<br />

## See the discussion we've had on each issue [here](https://github.com/dwyl/goodparts/wiki/Rules-Contents-page)

## (*Frequently Asked*) Questions?

**Q**: If the intention is to use *only* the Good Parts,
why not use **JSLint** and not bother with this tool?  
**A**: the simple answer is **JSLint** (*DC's tool*),
does not allow you to include a project-wide configuration
file, so you need to specify your environment e.g:
`/*jslint node: true */` in *every file*, which gets old fast.


# [tl;dr](https://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read)

## Why (_extended version_)

We _strongly_ agree with the following sentiment/quote:

> "_**constraints** can actually **boost creativity**_". [Martin Villeneuve](https://www.ted.com/talks/martin_villeneuve_how_i_made_an_impossible_film)


### _Why_ Should Anyone _Listen_ to `Douglas Crockford`?

There are *many* places you can go to learn JavaScript,
*unsurprisingly* they *all* claim to teach you the "right way",
and as a *beginner* it's *virtually impossible* to detect
which *is* the "*right*" path because there is a lot of
marketing hype which can easily be mistaken for "fact".

The only way a *beginner* can determine if the source of
learning is any good is by listening to their their peers
or failing that, "*gut feeling*", neither of which are
a *reliable* measure of _quality_.

Crockford is the "[Yoda](https://youtu.be/7YkbgvRMpW0?t=55s)"
of JavaScript, he has truly [_mastered_](https://en.wikipedia.org/wiki/Mastery_learning) the craft.  
He is a member of "[**TC39**](http://tc39wiki.calculist.org/about/people/)"
(the ECMAScript Technical Committee) responsible for
setting the language _standard_ to be implemented by web browser makers;
to say that DC "*knows*" JavaScript inside-out is an *understatement*.
He ***invented*** JavaScript Object Notation
("[***JSON***](https://tools.ietf.org/html/rfc7159)")
data format (*the Standard for REST APIs*) and wrote the first JSON parser.
He _painstakingly_ scoured the entire ECMAScript specification
in order to compile his list of Good (*and Bad*) Parts,
a *subset* of the language that can be *trusted* and
*used reliably anywhere*.
He has been **lead engineer** at Yahoo and **Paypal** and run his own
web consulting company specialising in JS applications.

Most people will not look at http://javascript.crockford.com
and think: "*yes, this looks like the place to learn
JavaScript...*" and that's a *shame* because its "*plainness*"
(*lack of pictures or medium-style presentation*) does not do _justice_ to
the _insight_ he shares.


## Better Parts


### Selected Quotes Quotes

_Highlights_ from Douglas Crockford's "***Better Parts***" Talk:  https://youtu.be/bo36MrBfTk4  
(*first presented at JSConfUY 15th March 2014*)

+ "_Programs **must be perfect** or they are **not right**_." -
 [02:21](https://youtu.be/bo36MrBfTk4?t=2m21s)  

+ "_**The Good Parts** are what's left when you
**remove all the bad parts**_" -
[02:30](https://youtu.be/bo36MrBfTk4?t=2m30s)  

+ "_Criteria for deciding if something is a good part or not is this:
if a feature is **sometimes useful and sometimes dangerous**,
and **if there is a better option, always use the better option**_." -
[02:41](https://youtu.be/bo36MrBfTk4?t=3m41s)

+ "_this is maybe the **most important** idea tonight:_  
_**We are not paid to use every feature of the language**
we are paid to **write programs that work well** and are
**free of error**_ -
[03:10](https://youtu.be/bo36MrBfTk4?t=3m10s)

+ "_People don't like **programs with errors** in them
and they wish we would **stop doing that**_."
[03:21](https://youtu.be/bo36MrBfTk4?t=3m21s)

+ "_Sometimes we work against our own interest,
in **trying to demonstrate mastery over the language**,
but we are **actually making things worse not better**_" -
[03:29](https://youtu.be/bo36MrBfTk4?t=3m29s)

<!--- commenting out as not strictly relevant to JS
+ "_Everybody should learn as many languages as they can,
because every language will teach you things you can apply
in other languages_"
[03:46](https://youtu.be/bo36MrBfTk4?t=3m46s)
-->

+ "_**This will save you some day**, if you comply with it..._" -
[07:47](https://youtu.be/bo36MrBfTk4?t=7m47s)

+ "_It's **not just a matter of opinion**, there is a **good reason for everything** that JSLint asks you to do_"

+ "_I'm only **telling you not to use** the tools that are
**unnecessary and dangerous**_" -
[07:50](https://youtu.be/bo36MrBfTk4?t=7m50s)

+ "_Eventually, **we want to be writing with one voice**,
we want all of the software we develop in a project to
look as though it was **developed by the same person**,
and that person is **really smart**_" - k
[08:39](https://youtu.be/bo36MrBfTk4?t=8m39s)

+ "_**Keystroking time** is **irrelevant**, so if you're doing
something stupid to shave keystrokes, that's counter-productive._" -
[09:17](https://youtu.be/bo36MrBfTk4?t=9m17s)

+ "_There's a **good reason those features were added to the language**.
I can tell you reliably, **that is absolutely not true**._" -
[09:55](https://youtu.be/bo36MrBfTk4?t=9m55s)

+ "_Just because a '**foot gun**' is **in the language**,
**doesn't mean you want to shoot your foot off**_" -
[10:26](https://youtu.be/bo36MrBfTk4?t=10m26s)


## Videos

+ JavaScript: ***The Good Parts*** (Google Tech Talks):
https://youtu.be/hQVTIJBZook
+ ***The Better Parts*** - JSConfUY 2014:
https://youtu.be/bo36MrBfTk4
+ Douglas Crockford ***Complete Playlist***:
https://www.youtube.com/playlist?list=PLEzQf147-uEpvTa1bHDNlxUL2klHUMHJu

## Background Reading

+ Comparison of JS Linting Tools:
https://www.sitepoint.com/comparison-javascript-linting-tools/
+ The Sorry Legacy of Internet Explorer:
http://www.wired.com/2016/01/the-sorry-legacy-of-microsoft-internet-explorer/
+ Readability:
https://www.nngroup.com/articles/legibility-readability-comprehension/

<br />

### Why does this matter / should I _care_?

If you are lucky enough to be building an *internal* web app
(*e.g: an intranet or "internal tools") and you "*know*" that
_**everyone**_ in the company/organisation is using **"_Latest Chrome_"**
that's *awesome*,
thank your _lucky stars_ and enjoy using all the latest & greatest features of
**ES6**!

If, like us, you live in the "*real world*" and build applications/websites
that need to be *accessible* by and work *consistently* on _any_ device/browser,
then using only the ***`goodparts`*** is a good idea.

> We are ***not suggesting*** that you (*your team/company*) *should*
> (*explicitly*) ***support IE8*** running on Windows XP! (*heavens no!*)
> Simply that there is an *easy* way to ensure that your code will work
*everywhere* so you don't have to *think* about it.


### ES2015?

The 6th edition JavaScript, _officially_ known as "**ES6**" or **ECMAScript _2015_**, was finalized in June 2015.
This update adds significant new syntax for writing complex applications, including classes and modules

https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015

#### _Should_ We Use ECMAScript 2015 (*AKA "ES6"*)?

When you see someone _trying_ to use ***all*** the
***latest features*** of **ECMAScript 2015**,
<!-- its clear they are just trying to *look* smart to their piers
and have not stopped to -->
think/ask:
+ "_will this code **work everywhere**_?"
+ "_did the **users** ask me to use this (new) language feature_?
(_or is there an `existing` way of doing this reliably...?_)"
+ "_if I'm just going to "**transpile**" this through babel or add a pollyfill
(for cross-browser compatibility) which means users have to load more bytes of code
in their browser (so pages take longer to load), what is true the advantage_...?"


### But caniuse.com says ...

Caniuse.com is a *fantastic* website. The UI is brilliant and for "*informal*"
(*i.e. non-scientific*) discussions about which HTML5 features are available
in a browser, we use it often! But caniuse.com bases it's pretty
graphs on the data from
[statcounter.com](http://gs.statcounter.com/about) which is *good*
but has *several* ***flaws in data collection methodology***:

1. ***Small sample size*** - StatCounter collects data for a  
"_network of more than **3 million websites**"
if you know *anything* about the internet you will realize that this
is a drop in the ocean.
3M sites is less than 0.3% of websites on the internet<sup>1</sup>.

2. ***Over counting*** - StatCounter counts *all* page views made by
a given user (agent) which means that *heavy* users have higher
representation in the sample.
(_If the website does not **work** on a given browser/device
  the person will **obviously** not get past the first page!_)
By contrast NetMarketShare only counts the *first* pageview
which means it gives an _**equal weighting to each visitor**_.

<sup>1</sup>According to [netcraft.com](http://news.netcraft.com/)
there are over a ***billion*** (*active*) websites online in May 2016.
It is *unclear* which websites StatCounter is sourcing its data from,
please don't take their usage tables as "*gospel*" because they are flawed.


## Browser Stats *Facts*

Most of us live in a *technology bubble*, we take it for _granted_
that we always have Wifi or 4G and assume that because many of our
friends/colleagues are using MacBook Pros or iPhone 6s that
*everyone* is in the same situation.


At the time of writing **Internet Explorer _8_** *still* has a **5.95%**
(*global*) Market Share (_according to
[netmarketshare.com](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)
**April 2016**_)

![browser-facts-pie-chart](https://cloud.githubusercontent.com/assets/194400/15629665/d985526c-2516-11e6-8169-3918a38865ab.png)

Even if we *think* that "*everyone*" has switched to Chrome,
the facts (*stats*) are clearly not supporting this hypothesis!

![Operating System Market Share](https://cloud.githubusercontent.com/assets/194400/15629790/3a60db12-251a-11e6-8c57-a622a56fa403.png)

> **58%** of people are still using an Operating System that is
***no longer supported by Microsoft*** (**Windows 7 & XP** market share = 58.45%) ...
> Microsoft ended "*mainstream*" support for Windows 7 on
[Jan 13 2015](https://support.microsoft.com/en-us/lifecycle/search/default.aspx?alpha=windows%207)
so even if they *want* to force everyone to upgrade to "Edge",
they cannot; which means we are *relying* on non-technical people to
*manually* upgrade their browser... If you have ever been in Tech support
and had a person ask "*what is a browser*?" you will know that
*might* take a while...  

If you want to dive a bit deeper into the methodology used by StatCounter see:
http://www.zdnet.com/article/net-market-share-vs-statcounter-whose-online-measurements-can-you-trust/

<!-- Is this relevant...?
### Wikipedia as a *Representative* Sample of all Web Traffic

If you want a *representative* sample of all internet users,
you cannot do better than Wikipedia which has content for almost *everyone*
and does its data-collection server-side (*so users without JavaScript
  or those who have JS disabled are still counted*)

| Browser / Version   | Vistors |
|:--------------------|--------:|
| Internet Explorer 7 | 1.65%   |
| Internet Explorer 8 | 1.31%   |
| Internet Explorer 9 | 1.28%   |
| Total Legacy IE     | 4.24%   |

> See:
> https://stats.wikimedia.org/wikimedia/squids/SquidReportClients.htm  
> https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser
-->
