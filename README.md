# my-payload-repo

Coursework for **FIT5003 Software Security** (Master of Cybersecurity, Monash
University), Assignment 2.

`payload.js` is an **educational demonstration** of a reflected cross-site scripting
(XSS) vulnerability in a deliberately vulnerable teaching web application used in the
unit — a mock banking app ("DevBank") that runs locally on `127.0.0.1`. The file is
hosted in a public repository because the assignment requires the payload to be served
from a public URL so the vulnerable demo application can load it during the exercise.

## Scope and responsible use

- This is a controlled classroom exercise against an **intentionally vulnerable**
  application run locally for the unit. No real system, user or account is involved.
- It is provided for **educational purposes only** — to show how an unsanitised input
  sink leads to XSS, and why output encoding, input validation and related defences
  matter.
- Do **not** use this against any system you do not own or do not have explicit
  permission to test. Using it against real systems or accounts is illegal.
