# Onetime Note
[![Build Status](https://travis-ci.org/sophomoric/secret.svg?branch=master)](https://travis-ci.org/sophomoric/secret)
[![Code Climate](https://codeclimate.com/github/sophomoric/secret/badges/gpa.svg)](https://codeclimate.com/github/sophomoric/secret)
[![Test Coverage](https://codeclimate.com/github/sophomoric/secret/badges/coverage.svg)](https://codeclimate.com/github/sophomoric/secret/coverage)
[![Issue Count](https://codeclimate.com/github/sophomoric/secret/badges/issue_count.svg)](https://codeclimate.com/github/sophomoric/secret)

## Live Website
  * https://onetimenote.com
  * Users can share a onetime note. As the name implies, the note vanishes after
    it has been seen once.

## Gifs
  * Onetimenote integrates with Giphy's search api:
    https://github.com/Giphy/GiphyAPI

## Markdown
  * Notes use markdown so that users can build a page with images, text and
    links.

## Live Preview Editing
  * Since notes can use a limited number of html tags, a live preview is lets
    users see what the final note will look like.

## Encryption
  * Messages are stored in an encrypted form. For extra security, a password is
    optional. If a password is used, it will:
    1) protect the page so that someone stumble upon the page by accident.
    2) Adds an extra layer of security since the password is used as the key to
    encrypt/decrypt notes. This means even the server administrator cannot
    decrypt these notes once they are stored in the database.

## Optional
  * The url for the note can be set to make it feel more personal: e.g.
    `https://onetimenote.com/happy-birthday-bob`
    Otherwise a random string is generated and used.
  * The browser can navigate away from the note several seconds after it has
    been viewed. This is disabled by default, but it can be set between 1 and 10
    seconds
  * No password is required if this field is left blank.

## Expiration
  * If a user loses the url to find a note it will eventually expire.
  * Unread notes are deleted from the server after 30 days.

