# middlesquarePRNG

> A JavaScript implementation of Von Neumann's pseudorandom number generator using the middle square method.

## Why?

Well, it certainly isn't practical. It comes from [this](https://mcnp.lanl.gov/pdf_files/nbs_vonneumann.pdf) paper in which Neumann made the claim, "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin." And this particular PRNG is really terrible. The period of each sequence is short and each sequence tends to converge to zero.

## How does it work?

The best explanation I've found is from an image on wikipedia:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Middle-square_method.svg/320px-Middle-square_method.svg.png)

## Why, again?

Because JavaScript's built-in random function doesn't take a seed and I needed a seed-able PRNG to complete a challenge from 'Category Theory for Programmers.' So this will do the trick for that. But don't use it for anything other than edification, because it is terrible.

