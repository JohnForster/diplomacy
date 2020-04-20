import { IGameBoard } from '@shared/types'

const countryData: IGameBoard = {
  'mapTitle': 'Classic',
  'viewBox': '0 0 609 559',
  'territories': {
    'adr': {
      'name': 'Adriatic Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 322 480 L 297 456 L 300 453 L 290 453 L 278 443 L 272 424 L 260 417 L 261 401 L 270 398 L 276 399 L 275 403 L 278 410 L 282 401 L 286 402 L 289 418 L 306 436 L 331 454 L 331 477 L 335 480 L 322 480',
      'textLocation': {
        'x': 300,
        'y': 435,
        'rotate': 48
      },
      'adjacentByLand': [
        'ion',
        'alb',
        'apu',
        'tri',
        'ven'
      ],
      'adjacentBySea': [
        'ion',
        'alb',
        'apu',
        'tri',
        'ven'
      ]
    },
    'aeg': {
      'name': 'Aegean\nSea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 376 537 L 371 520 L 378 521 L 377 513 L 386 516 L 385 509 L 370 494 L 371 491 L 378 494 L 368 483 L 371 477 L 379 484 L 382 483 L 381 477 L 386 478 L 380 472 L 392 472 L 400 468 L 408 470 L 410 473 L 414 475 L 410 482 L 409 487 L 417 486 L 417 489 L 420 495 L 417 498 L 417 507 L 423 510 L 427 524 L 435 523 L 435 530 L 416 549 L 412 547 L 387 546 L 383 544 L 376 537',
      'textLocation': {
        'x': 408,
        'y': 505
      },
      'adjacentByLand': [
        'eas',
        'ion',
        'bul/sc',
        'con',
        'gre',
        'smy'
      ],
      'adjacentBySea': [
        'eas',
        'ion',
        'bul/sc',
        'con',
        'gre',
        'smy'
      ]
    },
    'bal': {
      'name': 'Baltic Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 266 255 L 271 260 L 278 254 L 277 250 L 280 248 L 279 243 L 282 253 L 289 254 L 294 245 L 305 244 L 312 229 L 311 220 L 359 220 L 349 229 L 347 243 L 347 248 L 348 254 L 344 262 L 337 264 L 334 273 L 328 274 L 326 265 L 314 266 L 307 273 L 294 275 L 286 274 L 287 267 L 280 266 L 266 275 L 261 274 L 260 269 L 256 266 L 256 263 L 254 255 L 266 255',
      'textLocation': {
        'x': 320,
        'y': 247
      },
      'adjacentByLand': [
        'bot',
        'ska',
        'ber',
        'den',
        'kie',
        'lvn',
        'pru',
        'swe'
      ],
      'adjacentBySea': [
        'bot',
        'ska',
        'ber',
        'den',
        'kie',
        'lvn',
        'pru',
        'swe'
      ]
    },
    'bar': {
      'name': 'Barents Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 540 0 L 535 9 L 530 6 L 517 19 L 516 33 L 513 38 L 513 23 L 507 20 L 505 26 L 499 33 L 492 48 L 495 58 L 488 60 L 479 57 L 477 55 L 481 50 L 473 43 L 466 45 L 472 62 L 478 66 L 478 74 L 472 72 L 468 74 L 457 91 L 469 100 L 467 106 L 462 109 L 444 101 L 442 110 L 447 115 L 454 119 L 452 122 L 434 118 L 426 103 L 426 94 L 414 88 L 412 83 L 445 84 L 457 79 L 459 66 L 453 61 L 417 47 L 405 49 L 401 45 L 397 48 L 391 47 L 395 41 L 394 38 L 384 33 L 382 40 L 380 33 L 377 31 L 374 38 L 371 33 L 366 42 L 366 33 L 362 33 L 362 0 L 540 0',
      'textLocation': {
        'x': 440,
        'y': 15
      },
      'adjacentByLand': [
        'nrg',
        'nwy',
        'stp/nc'
      ],
      'adjacentBySea': [
        'nrg',
        'nwy',
        'stp/nc'
      ]
    },
    'bla': {
      'name': 'Black Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 440 458 L 430 455 L 426 450 L 422 441 L 425 427 L 429 426 L 430 423 L 432 409 L 439 404 L 438 397 L 446 378 L 459 375 L 461 377 L 459 379 L 465 383 L 476 381 L 478 383 L 472 385 L 468 392 L 477 396 L 477 401 L 486 404 L 488 397 L 494 396 L 497 392 L 507 389 L 506 384 L 494 387 L 485 378 L 503 364 L 526 351 L 527 354 L 514 365 L 517 371 L 520 371 L 515 384 L 511 383 L 510 386 L 517 393 L 528 394 L 554 406 L 567 408 L 573 417 L 570 427 L 555 438 L 551 437 L 520 441 L 514 438 L 511 440 L 502 433 L 481 438 L 470 447 L 464 457 L 442 460 L 440 458',
      'textLocation': {
        'x': 495,
        'y': 410
      },
      'adjacentByLand': [
        'ank',
        'arm',
        'con',
        'rum',
        'sev'
      ],
      'adjacentBySea': [
        'ank',
        'arm',
        'con',
        'rum',
        'sev'
      ]
    },
    'eas': {
      'name': 'Eastern Mediterranean',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 435 530 L 441 526 L 447 528 L 453 534 L 464 531 L 466 521 L 475 520 L 485 528 L 491 530 L 505 526 L 511 514 L 520 517 L 527 508 L 530 509 L 525 518 L 526 530 L 532 535 L 528 559 L 400 559 L 400 554 L 414 552 L 416 549 L 435 530',
      'textLocation': {
        'x': 478,
        'y': 538
      },
      'adjacentByLand': [
        'aeg',
        'ion',
        'smy',
        'syr'
      ],
      'adjacentBySea': [
        'aeg',
        'ion',
        'smy',
        'syr'
      ]
    },
    'eng': {
      'name': 'English Channel',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 173 301 L 169 311 L 153 315 L 155 320 L 150 319 L 144 318 L 142 312 L 136 310 L 136 326 L 124 323 L 122 318 L 102 317 L 88 303 L 100 291 L 110 292 L 120 295 L 124 291 L 134 294 L 147 295 L 160 298 L 168 296 L 173 301',
      'textLocation': {
        'x': 135,
        'y': 298
      },
      'adjacentByLand': [
        'iri',
        'mid',
        'nth',
        'bel',
        'bre',
        'lon',
        'pic',
        'wal'
      ],
      'adjacentBySea': [
        'iri',
        'mid',
        'nth',
        'bel',
        'bre',
        'lon',
        'pic',
        'wal'
      ]
    },
    'gol': {
      'name': 'Gulf of Lyon',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 115 469 L 110 461 L 124 444 L 131 439 L 146 438 L 157 432 L 158 425 L 158 418 L 169 412 L 176 417 L 188 422 L 198 421 L 211 416 L 222 410 L 233 415 L 238 431 L 224 431 L 221 434 L 211 436 L 213 451 L 218 454 L 218 458 L 214 461 L 206 462 L 205 466 L 154 466 L 148 463 L 142 469 L 115 469',
      'textLocation': {
        'x': 180,
        'y': 440
      },
      'adjacentByLand': [
        'tys',
        'wes',
        'mar',
        'pie',
        'spa/sc',
        'tus'
      ],
      'adjacentBySea': [
        'tys',
        'wes',
        'mar',
        'pie',
        'spa/sc',
        'tus'
      ]
    },
    'bot': {
      'name': 'Gulf\nof\nBothnia',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 311 220 L 314 209 L 322 206 L 328 203 L 331 193 L 326 183 L 320 182 L 321 161 L 330 146 L 343 138 L 351 128 L 347 121 L 349 112 L 355 104 L 362 107 L 368 108 L 372 120 L 366 121 L 359 136 L 345 151 L 347 160 L 350 165 L 348 178 L 349 184 L 357 186 L 365 191 L 384 185 L 402 177 L 403 183 L 411 184 L 414 187 L 408 187 L 400 192 L 399 197 L 387 196 L 371 198 L 369 202 L 365 204 L 368 210 L 372 213 L 373 221 L 377 227 L 373 229 L 366 228 L 359 220 L 311 220',
      'textLocation': {
        'x': 348,
        'y': 183
      },
      'adjacentByLand': [
        'bal',
        'fin',
        'lvn',
        'stp/sc',
        'swe'
      ],
      'adjacentBySea': [
        'bal',
        'fin',
        'lvn',
        'stp/sc',
        'swe'
      ]
    },
    'hel': {
      'name': 'Hel.',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 245 237 L 243 247 L 244 254 L 243 257 L 245 263 L 244 270 L 244 273 L 235 277 L 234 274 L 230 273 L 226 275 L 211 274 L 211 237 L 245 237',
      'textLocation': {
        'x': 235,
        'y': 248
      },
      'adjacentByLand': [
        'nth',
        'den',
        'hol',
        'kie'
      ],
      'adjacentBySea': [
        'nth',
        'den',
        'hol',
        'kie'
      ]
    },
    'ion': {
      'name': 'Ionian Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 289 511 L 290 514 L 295 515 L 308 500 L 311 491 L 304 484 L 310 480 L 318 485 L 322 485 L 322 480 L 335 480 L 339 487 L 346 498 L 350 498 L 347 500 L 352 508 L 367 507 L 371 511 L 355 510 L 350 514 L 357 521 L 359 533 L 360 528 L 367 536 L 368 531 L 376 537 L 383 544 L 380 547 L 383 550 L 400 554 L 400 559 L 232 559 L 234 551 L 232 544 L 225 535 L 231 531 L 236 524 L 247 513 L 258 519 L 273 531 L 281 532 L 282 521 L 285 513 L 285 511 L 289 511',
      'textLocation': {
        'x': 320,
        'y': 525
      },
      'adjacentByLand': [
        'adr',
        'aeg',
        'eas',
        'tys',
        'alb',
        'apu',
        'gre',
        'nap',
        'tun'
      ],
      'adjacentBySea': [
        'adr',
        'aeg',
        'eas',
        'tys',
        'alb',
        'apu',
        'gre',
        'nap',
        'tun'
      ]
    },
    'iri': {
      'name': 'Irish Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 100 291 L 112 287 L 122 281 L 130 282 L 127 276 L 119 272 L 116 272 L 115 265 L 128 262 L 126 256 L 121 257 L 132 250 L 135 250 L 139 240 L 136 229 L 130 227 L 120 227 L 110 232 L 109 246 L 98 259 L 87 257 L 70 261 L 58 273 L 88 303 L 100 291',
      'textLocation': {
        'x': 95,
        'y': 265
      },
      'adjacentByLand': [
        'eng',
        'mid',
        'nat',
        'lvp',
        'wal'
      ],
      'adjacentBySea': [
        'eng',
        'mid',
        'nat',
        'lvp',
        'wal'
      ]
    },
    'mid': {
      'name': 'Mid\nAtlantic\nOcean',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 102 317 L 100 322 L 103 328 L 109 329 L 123 344 L 122 350 L 123 357 L 128 363 L 121 382 L 122 384 L 112 399 L 101 396 L 96 397 L 72 384 L 59 381 L 54 375 L 48 374 L 46 378 L 39 375 L 33 381 L 35 384 L 32 396 L 30 406 L 17 427 L 14 427 L 10 433 L 13 440 L 15 441 L 12 450 L 13 454 L 8 462 L 19 469 L 27 468 L 33 475 L 34 484 L 37 490 L 37 495 L 33 496 L 17 518 L 0 520 L 0 273 L 58 273 L 102 317',
      'textLocation': {
        'x': 60,
        'y': 315
      },
      'adjacentByLand': [
        'eng',
        'iri',
        'nat',
        'wes',
        'bre',
        'gas',
        'naf',
        'por',
        'spa/nc',
        'spa/sc'
      ],
      'adjacentBySea': [
        'eng',
        'iri',
        'nat',
        'wes',
        'bre',
        'gas',
        'naf',
        'por',
        'spa/nc',
        'spa/sc'
      ]
    },
    'nat': {
      'name': 'North Atlantic Ocean',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 70 261 L 64 250 L 67 242 L 71 245 L 81 234 L 74 228 L 80 225 L 78 218 L 82 217 L 89 220 L 94 220 L 95 218 L 94 216 L 97 216 L 101 212 L 110 212 L 119 217 L 120 227 L 130 227 L 130 223 L 138 217 L 138 214 L 130 208 L 129 197 L 139 189 L 140 182 L 148 177 L 148 0 L 0 0 L 0 273 L 58 273 L 70 261',
      'textLocation': {
        'x': 75,
        'y': 120
      },
      'adjacentByLand': [
        'iri',
        'mid',
        'nrg',
        'cly',
        'lvp'
      ],
      'adjacentBySea': [
        'iri',
        'mid',
        'nrg',
        'cly',
        'lvp'
      ]
    },
    'nth': {
      'name': 'North Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 168 296 L 172 294 L 165 293 L 176 283 L 178 274 L 177 270 L 171 268 L 168 270 L 166 269 L 169 265 L 170 252 L 168 246 L 163 239 L 163 226 L 161 218 L 157 216 L 151 215 L 158 214 L 165 210 L 170 202 L 171 197 L 171 181 L 198 154 L 236 154 L 237 160 L 233 167 L 231 180 L 233 186 L 229 192 L 231 201 L 241 209 L 241 224 L 248 224 L 245 237 L 211 237 L 211 274 L 207 279 L 205 279 L 205 276 L 198 289 L 191 299 L 173 301 L 168 296',
      'textLocation': {
        'x': 210,
        'y': 210
      },
      'adjacentByLand': [
        'eng',
        'hel',
        'nrg',
        'ska',
        'bel',
        'den',
        'edi',
        'hol',
        'lon',
        'nwy',
        'yor'
      ],
      'adjacentBySea': [
        'eng',
        'hel',
        'nrg',
        'ska',
        'bel',
        'den',
        'edi',
        'hol',
        'lon',
        'nwy',
        'yor'
      ]
    },
    'nrg': {
      'name': 'Norwegian Sea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 362 33 L 357 39 L 343 44 L 324 54 L 320 64 L 310 75 L 309 84 L 303 86 L 292 111 L 277 132 L 269 134 L 264 142 L 258 141 L 236 154 L 198 154 L 171 181 L 171 197 L 158 193 L 152 194 L 154 188 L 161 185 L 162 181 L 148 177 L 148 0 L 362 0 L 362 33',
      'textLocation': {
        'x': 220,
        'y': 70
      },
      'adjacentByLand': [
        'bar',
        'nat',
        'nth',
        'cly',
        'edi',
        'nwy'
      ],
      'adjacentBySea': [
        'bar',
        'nat',
        'nth',
        'cly',
        'edi',
        'nwy'
      ]
    },
    'ska': {
      'name': 'Ska.',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 241 209 L 246 210 L 266 201 L 270 193 L 275 203 L 277 218 L 276 224 L 282 236 L 279 240 L 279 243 L 275 242 L 269 243 L 266 240 L 267 234 L 266 221 L 263 223 L 248 224 L 241 224 L 241 209',
      'textLocation': {
        'x': 267,
        'y': 207
      },
      'adjacentByLand': [
        'bal',
        'nth',
        'den',
        'nwy',
        'swe'
      ],
      'adjacentBySea': [
        'bal',
        'nth',
        'den',
        'nwy',
        'swe'
      ]
    },
    'tys': {
      'name': 'Tyrrhenian\nSea',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 238 431 L 247 442 L 248 447 L 256 458 L 271 464 L 276 474 L 290 487 L 294 502 L 289 511 L 285 511 L 285 508 L 276 510 L 263 510 L 257 507 L 252 508 L 247 513 L 236 524 L 233 523 L 224 527 L 223 518 L 218 516 L 218 490 L 220 490 L 224 468 L 222 458 L 218 458 L 218 454 L 223 450 L 225 444 L 225 436 L 224 431 L 238 431',
      'textLocation': {
        'x': 255,
        'y': 475
      },
      'adjacentByLand': [
        'gol',
        'ion',
        'nap',
        'rom',
        'tun',
        'tus',
        'wes'
      ],
      'adjacentBySea': [
        'gol',
        'ion',
        'nap',
        'rom',
        'tun',
        'tus',
        'wes'
      ]
    },
    'wes': {
      'name': 'Western Mediterranean',
      'tileType': 'seaTile',
      'id': 'w',
      'path': 'M 37 490 L 47 488 L 52 489 L 60 486 L 78 491 L 83 494 L 86 485 L 90 483 L 98 484 L 107 474 L 113 473 L 115 469 L 142 469 L 150 471 L 154 466 L 205 466 L 206 476 L 204 485 L 208 492 L 212 492 L 217 489 L 218 490 L 218 516 L 212 517 L 208 521 L 203 520 L 179 515 L 169 518 L 150 511 L 117 509 L 106 511 L 99 515 L 89 512 L 84 518 L 79 520 L 68 516 L 68 511 L 64 514 L 46 509 L 42 502 L 41 494 L 37 495 L 37 490',
      'textLocation': {
        'x': 150,
        'y': 485
      },
      'adjacentByLand': [
        'gol',
        'mid',
        'naf',
        'spa/sc',
        'tun',
        'tys'
      ],
      'adjacentBySea': [
        'gol',
        'mid',
        'naf',
        'spa/sc',
        'tun',
        'tys'
      ]
    },
    'alb': {
      'name': 'Alb.',
      'tileType': 'landTile',
      'id': 'l Albania',
      'path': 'M 331 454 L 331 477 L 335 480 L 339 487 L 350 477 L 350 471 L 346 466 L 346 452 L 337 446 L 330 445 L 331 454',
      'textLocation': {
        'x': 345,
        'y': 461
      },
      'adjacentByLand': [
        'adr',
        'ion',
        'gre',
        'ser',
        'tri'
      ],
      'adjacentBySea': [
        'adr',
        'ion',
        'gre',
        'tri'
      ]
    },
    'ank': {
      'name': 'Ankara',
      'tileType': 'landTile',
      'id': 'l Ankara',
      'path': 'M 555 438 L 551 437 L 520 441 L 514 438 L 511 440 L 502 433 L 481 438 L 470 447 L 464 457 L 468 461 L 468 479 L 466 491 L 473 491 L 490 480 L 501 482 L 508 480 L 531 460 L 546 462 L 555 460 L 557 449 L 555 438',
      'textLocation': {
        'x': 505,
        'y': 450
      },
      'adjacentByLand': [
        'bla',
        'arm',
        'con',
        'smy'
      ],
      'adjacentBySea': [
        'bla',
        'arm',
        'con'
      ]
    },
    'apu': {
      'name': 'Apulia',
      'tileType': 'landTile',
      'id': 'l Apulia',
      'path': 'M 304 484 L 310 480 L 318 485 L 322 485 L 322 480 L 297 456 L 300 453 L 290 453 L 278 443 L 274 447 L 279 451 L 280 455 L 279 458 L 293 481 L 304 484',
      'textLocation': {
        'x': 305,
        'y': 465,
        'rotate': 48
      },
      'adjacentByLand': [
        'adr',
        'ion',
        'nap',
        'rom',
        'ven'
      ],
      'adjacentBySea': [
        'adr',
        'ion',
        'nap',
        'ven'
      ]
    },
    'arm': {
      'name': 'Armenia',
      'tileType': 'landTile',
      'id': 'l Armenia',
      'path': 'M 609 493 L 584 478 L 563 479 L 562 471 L 556 467 L 555 460 L 557 449 L 555 438 L 570 427 L 589 442 L 594 439 L 603 441 L 609 440 L 609 493',
      'textLocation': {
        'x': 587,
        'y': 453
      },
      'adjacentByLand': [
        'bla',
        'ank',
        'sev',
        'smy',
        'syr'
      ],
      'adjacentBySea': [
        'bla',
        'ank',
        'sev',
        'smy'
      ]
    },
    'bel': {
      'name': 'Bel.',
      'tileType': 'landTile',
      'id': 'l Belgium',
      'path': 'M 191 299 L 194 303 L 206 306 L 205 311 L 208 315 L 210 326 L 205 331 L 192 323 L 184 315 L 169 311 L 173 301 L 191 299',
      'textLocation': {
        'x': 197,
        'y': 303
      },
      'adjacentByLand': [
        'eng',
        'nth',
        'bur',
        'hol',
        'pic',
        'ruh'
      ],
      'adjacentBySea': [
        'eng',
        'nth',
        'hol',
        'pic'
      ]
    },
    'ber': {
      'name': 'Berlin',
      'tileType': 'landTile',
      'id': 'l Berlin',
      'path': 'M 294 275 L 286 274 L 287 267 L 280 266 L 266 275 L 266 283 L 262 287 L 264 293 L 261 296 L 263 310 L 288 305 L 296 300 L 297 296 L 292 290 L 294 275',
      'textLocation': {
        'x': 284,
        'y': 282
      },
      'adjacentByLand': [
        'bal',
        'kie',
        'mun',
        'pru',
        'sil'
      ],
      'adjacentBySea': [
        'bal',
        'kie',
        'pru'
      ]
    },
    'boh': {
      'name': 'Bohemia',
      'tileType': 'landTile',
      'id': 'l Bohemia',
      'path': 'M 281 356 L 276 346 L 268 343 L 264 329 L 266 325 L 278 326 L 288 321 L 297 322 L 311 334 L 314 332 L 321 339 L 322 347 L 316 348 L 303 346 L 295 349 L 292 357 L 281 356',
      'textLocation': {
        'x': 298,
        'y': 331
      },
      'adjacentByLand': [
        'gal',
        'mun',
        'sil',
        'tyr',
        'vie'
      ],
      'adjacentBySea': []
    },
    'bre': {
      'name': 'Brest',
      'tileType': 'landTile',
      'id': 'l Brest',
      'path': 'M 150 319 L 144 318 L 142 312 L 136 310 L 136 326 L 124 323 L 122 318 L 102 317 L 100 322 L 103 328 L 109 329 L 123 344 L 122 350 L 123 357 L 128 363 L 146 365 L 146 337 L 148 329 L 150 319',
      'textLocation': {
        'x': 135,
        'y': 330
      },
      'adjacentByLand': [
        'eng',
        'mid',
        'gas',
        'par',
        'pic'
      ],
      'adjacentBySea': [
        'eng',
        'mid',
        'gas',
        'pic'
      ]
    },
    'bud': {
      'name': 'Budapest',
      'tileType': 'landTile',
      'id': 'l Budapest',
      'path': 'M 394 376 L 395 382 L 401 385 L 406 396 L 401 402 L 387 402 L 367 406 L 365 412 L 360 413 L 342 410 L 338 412 L 335 410 L 332 410 L 323 408 L 321 398 L 311 394 L 308 383 L 311 375 L 322 370 L 335 354 L 337 350 L 350 347 L 360 351 L 368 353 L 377 360 L 378 363 L 384 365 L 394 376',
      'textLocation': {
        'x': 360,
        'y': 375
      },
      'adjacentByLand': [
        'gal',
        'rum',
        'ser',
        'tri',
        'vie'
      ],
      'adjacentBySea': []
    },
    'bul': {
      'name': 'Bulgaria',
      'tileType': 'landTile',
      'id': 'l',
      'path': '',
      'textLocation': {
        'x': 400,
        'y': 438
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'bul/ec': {
      'name': 'Bulgaria',
      'tileType': 'landTile',
      'id': 'l',
      'path': 'M 413 464 L 412 454 L 420 451 L 426 450 L 422 441 L 425 427 L 429 426 L 430 423 L 422 420 L 410 420 L 404 422 L 398 427 L 390 425 L 382 427 L 375 423 L 370 425 L 367 421 L 365 425 L 368 433 L 371 438 ',
      'textLocation': {
        'x': 400,
        'y': 438
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'bul/sc': {
      'name': '',
      'tileType': 'landTile',
      'id': 'l',
      'path': 'M 371 438 L 366 439 L 371 456 L 365 461 L 369 464 L 376 464 L 388 460 L 392 472 L 400 468 L 408 470 L 413 464',
      'adjacentByLand': [
        'aeg',
        'con',
        'gre',
        'ser'
      ],
      'adjacentBySea': [
        'aeg',
        'con',
        'gre'
      ]
    },
    'bur': {
      'name': 'Burgundy',
      'tileType': 'landTile',
      'id': 'l Burgundy',
      'path': 'M 192 323 L 205 331 L 204 338 L 211 346 L 213 352 L 209 363 L 208 367 L 194 382 L 178 381 L 178 390 L 173 396 L 168 395 L 163 387 L 165 383 L 158 380 L 156 374 L 165 365 L 185 344 L 188 332 L 192 323',
      'textLocation': {
        'x': 186,
        'y': 352,
        'rotate': -50
      },
      'adjacentByLand': [
        'bel',
        'gas',
        'mar',
        'mun',
        'par',
        'pic',
        'ruh'
      ],
      'adjacentBySea': []
    },
    'cly': {
      'name': 'Clyde',
      'tileType': 'landTile',
      'id': 'l Clyde',
      'path': 'M 138 214 L 130 208 L 129 197 L 139 189 L 140 182 L 148 177 L 162 181 L 161 185 L 154 188 L 152 194 L 146 200 L 144 213 L 138 214',
      'textLocation': {
        'x': 137,
        'y': 194
      },
      'adjacentByLand': [
        'nat',
        'nrg',
        'edi',
        'lvp'
      ],
      'adjacentBySea': [
        'nat',
        'nrg',
        'edi',
        'lvp'
      ]
    },
    'con': {
      'name': 'Constantinople',
      'tileType': 'landTile',
      'id': 'l Constantinople',
      'path': 'M 408 470 L 410 473 L 414 475 L 410 482 L 409 487 L 417 486 L 417 489 L 423 487 L 432 493 L 452 495 L 466 491 L 468 479 L 468 461 L 464 457 L 442 460 L 440 458 L 430 455 L 426 450 L 420 451 L 412 454 L 413 464 L 408 470',
      'textLocation': {
        'x': 444,
        'y': 468,
        'rotate': -28
      },
      'adjacentByLand': [
        'aeg',
        'bla',
        'ank',
        'bul/sc',
        'smy'
      ],
      'adjacentBySea': [
        'aeg',
        'bla',
        'ank',
        'bul/sc',
        'smy'
      ]
    },
    'den': {
      'name': 'Den.',
      'tileType': 'landTile',
      'id': 'l Denmark',
      'path': 'M 279 243 L 275 242 L 269 243 L 266 240 L 267 234 L 266 221 L 263 223 L 248 224 L 245 237 L 243 247 L 244 254 L 254 255 L 266 255 L 271 260 L 278 254 L 277 250 L 280 248  L 279 243',
      'textLocation': {
        'x': 252,
        'y': 235
      },
      'adjacentByLand': [
        'bal',
        'hel',
        'nth',
        'ska',
        'kie',
        'swe'
      ],
      'adjacentBySea': [
        'bal',
        'hel',
        'nth',
        'ska',
        'kie',
        'swe'
      ]
    },
    'edi': {
      'name': 'Edb.',
      'tileType': 'landTile',
      'id': 'l Edinburgh',
      'path': 'M 152 194 L 158 193 L 171 197  170 202 L 165 210 L 158 214 L 151 215 L 157 216 L 161 218 L 163 226 L 155 228 L 145 217 L 144 213 L 146 200 L 152 194',
      'textLocation': {
        'x': 163,
        'y': 198
      },
      'adjacentByLand': [
        'nth',
        'nrg',
        'cly',
        'lvp',
        'yor'
      ],
      'adjacentBySea': [
        'nth',
        'nrg',
        'cly',
        'yor'
      ]
    },
    'fin': {
      'name': 'Finland',
      'tileType': 'landTile',
      'id': 'l Finland',
      'path': 'M 362 107 L 368 108 L 372 120 L 366 121 L 359 136 L 345 151 L 347 160 L 350 165 L 348 178 L 349 184 L 357 186 L 365 191 L 384 185 L 402 177 L 412 161 L 410 152 L 414 147 L 410 130 L 402 118 L 401 110 L 392 92 L 393 73 L 387 68 L 388 61 L 386 58 L 388 54 L 379 48 L 370 49 L 369 61 L 355 62 L 346 54 L 342 61 L 356 71 L 362 107',
      'textLocation': {
        'x': 385,
        'y': 135
      },
      'adjacentByLand': [
        'bot',
        'nwy',
        'stp/nc',
        'stp/sc',
        'swe'
      ],
      'adjacentBySea': [
        'bot',
        'stp/sc',
        'swe'
      ]
    },
    'gal': {
      'name': 'Galicia',
      'tileType': 'landTile',
      'id': 'l Galicia',
      'path': 'M 333 330 L 341 330 L 344 332 L 353 327 L 356 323 L 361 324 L 367 329 L 374 327 L 379 324 L 383 327 L 385 332 L 399 338 L 404 354 L 403 360 L 404 371 L 394 376 L 384 365 L 378 363 L 377 360 L 368 353 L 360 351 L 350 347 L 337 350 L 329 346 L 322 347 L 321 339 L 322 347 L 321 339 L 325 340 L 329 338 L 333 330',
      'textLocation': {
        'x': 375,
        'y': 338,
        'rotate': 20
      },
      'adjacentByLand': [
        'boh',
        'bud',
        'rum',
        'sil',
        'ukr',
        'vie',
        'war'
      ],
      'adjacentBySea': []
    },
    'gas': {
      'name': 'Gascony',
      'tileType': 'landTile',
      'id': 'l Gascony',
      'path': 'M 128 363 L 121 382 L 122 384 L 112 399 L 113 407 L 123 412 L 134 417 L 135 414 L 142 417 L 149 403 L 157 397 L 168 395 L 163 387 L 165 383 L 158 380 L 156 374 L 149 372 L 146 365 L 128 363',
      'textLocation': {
        'x': 144,
        'y': 383
      },
      'adjacentByLand': [
        'mid',
        'bre',
        'bur',
        'mar',
        'par',
        'spa/nc',
        'spa/sc'
      ],
      'adjacentBySea': [
        'mid',
        'bre',
        'spa/nc'
      ]
    },
    'gre': {
      'name': 'Greece',
      'tileType': 'landTile',
      'id': 'l Greece',
      'path': 'M 339 487 L 346 498 L 350 498 L 347 500 L 352 508 L 367 507 L 371 511 L 355 510 L 350 514 L 357 521 L 359 533 L 360 528 L 367 536 L 368 531 L 376 537 L 371 520 L 378 521 L 377 513 L 386 516 L 385 509 L 370 494 L 371 491 L 378 494 L 368 483 L 371 477 L 379 484 L 382 483 L 381 477 L 386 478 L 380 472 L 392 472 L 388 460 L 376 464 L 369 464 L 361 467 L 356 471 L 350 471 L 350 477 L 339 487',
      'textLocation': {
        'x': 361,
        'y': 481
      },
      'adjacentByLand': [
        'aeg',
        'ion',
        'alb',
        'bul/sc',
        'ser'
      ],
      'adjacentBySea': [
        'aeg',
        'ion',
        'alb',
        'bul/sc'
      ]
    },
    'hol': {
      'name': 'Hol.',
      'tileType': 'landTile',
      'id': 'l Holland',
      'path': 'M 226 275 L 227 280 L 225 292 L 220 298 L 215 297 L 213 302 L 210 313 L 208 315 L 205 311 L 206 306 L 194 303 L 191 299 L 198 289 L 205 276 L 205 279 L 207 279 L 211 274 L 226 275',
      'textLocation': {
        'x': 215,
        'y': 285
      },
      'adjacentByLand': [
        'hel',
        'nth',
        'bel',
        'kie',
        'ruh'
      ],
      'adjacentBySea': [
        'hel',
        'nth',
        'bel',
        'kie',
        'ruh'
      ]
    },
    'kie': {
      'name': 'Kiel',
      'tileType': 'landTile',
      'id': 'l Kiel',
      'path': 'M 244 254 L 243 257 L 245 263 L 244 270 L 244 273 L 235 277 L 234 274 L 230 273 L 226 275 L 227 280 L 225 292 L 220 298 L 215 297 L 213 302 L 232 308 L 241 316 L 243 322 L 263 310 L 261 296 L 264 293 L 262 287 L 266 283 L 266 275 L 261 274 L 260 269 L 256 266 L 256 263 L 254 255 L 244 254',
      'textLocation': {
        'x': 247,
        'y': 283
      },
      'adjacentByLand': [
        'bal',
        'hel',
        'ber',
        'den',
        'hol',
        'mun',
        'ruh'
      ],
      'adjacentBySea': [
        'bal',
        'hel',
        'ber',
        'den',
        'hol',
        'ruh'
      ]
    },
    'lvp': {
      'name': 'Lvp.',
      'tileType': 'landTile',
      'id': 'l Liverpool',
      'path': 'M 128 262 L 126 256 L 121 257 L 132 250 L 135 250 L 139 240 L 136 229 L 130 227 L 130 223 L 138 217 L 138 214 L 144 213 L 145 217 L 155 228 L 155 239 L 151 248 L 150 264 L 143 262 L 128 262',
      'textLocation': {
        'x': 143,
        'y': 230
      },
      'adjacentByLand': [
        'iri',
        'nat',
        'cly',
        'edi',
        'wal',
        'yor'
      ],
      'adjacentBySea': [
        'iri',
        'nat',
        'cly',
        'wal'
      ]
    },
    'lvn': {
      'name': 'Livonia',
      'tileType': 'landTile',
      'id': 'l Livonia',
      'path': 'M 369 202 L 365 204 L 368 210 L 372 213 L 373 221 L 377 227 L 373 229 L 366 228 L 359 220 L 349 229 L 347 243 L 354 251 L 356 261 L 362 260 L 367 265 L 365 281 L 372 283 L 379 290 L 389 285 L 392 278 L 404 275 L 405 239 L 409 228 L 405 217 L 394 205 L 382 206 L 372 205 L 369 202',
      'textLocation': {
        'x': 385,
        'y': 240
      },
      'adjacentByLand': [
        'bal',
        'bot',
        'mos',
        'pru',
        'stp/sc',
        'war'
      ],
      'adjacentBySea': [
        'bal',
        'bot',
        'pru',
        'stp/sc'
      ]
    },
    'lon': {
      'name': 'London',
      'tileType': 'landTile',
      'id': 'l London',
      'path': 'M 166 269 L 168 270 L 171 268 L 177 270 L 178 274 L 176 283 L 165 293 L 172 294 L 168 296 L 160 298 L 147 295 L 145 281 L 150 277 L 153 271 L 166 269',
      'textLocation': {
        'x': 170,
        'y': 275
      },
      'adjacentByLand': [
        'eng',
        'nth',
        'wal',
        'yor'
      ],
      'adjacentBySea': [
        'eng',
        'nth',
        'wal',
        'yor'
      ]
    },
    'mar': {
      'name': 'Marseilles',
      'tileType': 'landTile',
      'id': 'l Marseilles',
      'path': 'M 142 417 L 149 403 L 157 397 L 168 395 L 173 396 L 178 390 L 178 381 L 194 382 L 197 385 L 203 379 L 207 386 L 204 390 L 207 396 L 201 399 L 204 402 L 203 410 L 211 416 L 198 421 L 188 422 L 176 417 L 169 412 L 158 418 L 158 425 L 154 427 L 142 417',
      'textLocation': {
        'x': 181,
        'y': 397
      },
      'adjacentByLand': [
        'gol',
        'bur',
        'gas',
        'pie',
        'spa/sc'
      ],
      'adjacentBySea': [
        'gol',
        'gas',
        'pie',
        'spa/sc'
      ]
    },
    'mos': {
      'name': 'Moscow',
      'tileType': 'landTile',
      'id': 'l Moscow',
      'path': 'M 609 117 L 598 132 L 573 143 L 564 159 L 534 164 L 515 169 L 489 184 L 476 183 L 458 194 L 456 207 L 457 210 L 451 213 L 447 209 L 439 211 L 428 225 L 421 229 L 409 228 L 405 239 L 404 275 L 392 278 L 389 285 L 379 290 L 386 309 L 390 306 L 456 292 L 468 295 L 477 289 L 494 295 L 505 280 L 516 286 L 526 287 L 533 283 L 549 284 L 554 304 L 564 305 L 569 321 L 597 330 L 609 330 L 609 117',
      'textLocation': {
        'x': 460,
        'y': 245
      },
      'adjacentByLand': [
        'lvn',
        'sev',
        'stp/nc',
        'stp/sc',
        'ukr',
        'war'
      ],
      'adjacentBySea': []
    },
    'mun': {
      'name': 'Munich',
      'tileType': 'landTile',
      'id': 'l Munich',
      'path': 'M 234 366 L 243 370 L 246 369 L 250 371 L 267 368 L 271 370 L 269 362 L 275 362 L 281 356 L 276 346 L 268 343 L 264 329 L 266 325 L 278 326 L 288 321 L 284 314 L 288 305 L 263 310 L 243 322 L 237 322 L 219 344 L 211 346 L 213 352 L 209 363 L 222 365 L 225 362 L 232 363 L 234 366',
      'textLocation': {
        'x': 250,
        'y': 337
      },
      'adjacentByLand': [
        'ber',
        'boh',
        'bur',
        'kie',
        'ruh',
        'sil',
        'tyr'
      ],
      'adjacentBySea': []
    },
    'nap': {
      'name': 'Naples',
      'tileType': 'landTile',
      'id': 'l Naples',
      'path': 'M 271 464 L 276 474 L 290 487 L 294 502 L 289 511 L 290 514 L 295 515 L 308 500 L 311 491 L 304 484 L 293 481 L 279 458 L 271 464',
      'textLocation': {
        'x': 306,
        'y': 488
      },
      'adjacentByLand': [
        'ion',
        'tys',
        'apu',
        'rom'
      ],
      'adjacentBySea': [
        'ion',
        'tys',
        'apu',
        'rom'
      ]
    },
    'naf': {
      'name': 'North Africa',
      'tileType': 'landTile',
      'id': 'l North Africa',
      'path': 'M 203 520 L 179 515 L 169 518 L 150 511 L 117 509 L 106 511 L 99 515 L 89 512 L 84 518 L 79 520 L 68 516 L 68 511 L 64 514 L 46 509 L 42 502 L 41 494 L 37 495 L 33 496 L 17 518 L 0 520 L 0 559 L 195 559 L 197 527 L 203 520',
      'textLocation': {
        'x': 105,
        'y': 530
      },
      'adjacentByLand': [
        'mid',
        'wes',
        'tun'
      ],
      'adjacentBySea': [
        'mid',
        'wes',
        'tun'
      ]
    },
    'nwy': {
      'name': 'Norway',
      'tileType': 'landTile',
      'id': 'l Norway',
      'path': 'M 397 48 L 391 47 L 395 41 L 394 38 L 384 33 L 382 40 L 380 33 L 377 31 L 374 38 L 371 33 L 366 42 L 366 33 L 362 33 L 357 39 L 343 44 L 324 54 L 320 64 L 310 75 L 309 84 L 303 86 L 292 111 L 277 132 L 269 134 L 264 142 L 258 141 L 236 154 L 237 160 L 233 167 L 231 180 L 233 186 L 229 192 L 231 201 L 241 209 L 246 210 L 266 201 L 270 193 L 275 203 L 279 204 L 287 177 L 285 170 L 290 164 L 292 133 L 301 132 L 300 126 L 309 115 L 308 104 L 311 101 L 324 71 L 332 74 L 330 64 L 341 65 L 342 61 L 346 54 L 355 62 L 369 61 L 370 49 L 379 48 L 388 54 L 386 58 L 388 61 L 397 48',
      'textLocation': {
        'x': 265,
        'y': 163
      },
      'adjacentByLand': [
        'bar',
        'nth',
        'nrg',
        'ska',
        'fin',
        'swe'
      ],
      'adjacentBySea': [
        'bar',
        'nth',
        'nrg',
        'ska',
        'fin',
        'swe',
        'stp/nc'
      ]
    },
    'par': {
      'name': 'Paris',
      'tileType': 'landTile',
      'id': 'l Paris',
      'path': 'M 146 365 L 149 372 L 156 374 L 165 365 L 185 344 L 188 332 L 172 328 L 165 331 L 159 331 L 148 329 L 146 337 L 146 365',
      'textLocation': {
        'x': 165,
        'y': 341
      },
      'adjacentByLand': [
        'bre',
        'bur',
        'gas',
        'pic'
      ],
      'adjacentBySea': []
    },
    'pic': {
      'name': 'Pic.',
      'tileType': 'landTile',
      'id': 'l Picardy',
      'path': 'M 169 311 L 153 315 L 155 320 L 150 319 L 148 329 L 159 331 L 165 331 L 172 328 L 188 332 L 192 323 L 184 315 L 169 311',
      'textLocation': {
        'x': 177,
        'y': 314
      },
      'adjacentByLand': [
        'eng',
        'bel',
        'bre',
        'bur',
        'par'
      ],
      'adjacentBySea': [
        'eng',
        'bel',
        'bre',
        'par'
      ]
    },
    'pie': {
      'name': 'Pied.',
      'tileType': 'landTile',
      'id': 'l Piedmont',
      'path': 'M 207 386 L 204 390 L 207 396 L 201 399 L 204 402 L 203 410 L 211 416 L 222 410 L 233 415 L 236 411 L 233 404 L 246 392 L 243 388 L 229 385 L 227 390 L 221 385 L 213 387 L 207 386',
      'textLocation': {
        'x': 224,
        'y': 393
      },
      'adjacentByLand': [
        'gol',
        'mar',
        'tus',
        'tyr',
        'ven'
      ],
      'adjacentBySea': [
        'gol',
        'mar',
        'tus',
        'ven'
      ]
    },
    'por': {
      'name': 'Portugal',
      'tileType': 'landTile',
      'id': 'l Portugal',
      'path': 'M 32 396 L 30 406 L 17 427 L 14 427 L 10 433 L 13 440 L 15 441 L 12 450 L 13 454 L 8 462 L 19 469 L 27 468 L 36 457 L 34 447 L 40 441 L 37 431 L 42 432 L 52 412 L 61 411 L 62 407 L 55 400 L 42 399 L 43 395 L 32 396',
      'textLocation': {
        'x': 25,
        'y': 420,
        'rotate': -63
      },
      'adjacentByLand': [
        'mid',
        'spa/nc',
        'spa/sc'
      ],
      'adjacentBySea': [
        'mid',
        'spa/nc',
        'spa/sc'
      ]
    },
    'pru': {
      'name': 'Prussia',
      'tileType': 'landTile',
      'id': 'l Prussia',
      'path': 'M 347 243 L 347 248 L 348 254 L 344 262 L 337 264 L 334 273 L 328 274 L 326 265 L 314 266 L 307 273 L 294 275 L 292 290 L 297 296 L 296 300 L 320 303 L 324 299 L 326 292 L 341 287 L 345 289 L 359 286 L 365 281 L 367 265 L 362 260 L 356 261 L 354 251 L 347 243',
      'textLocation': {
        'x': 330,
        'y': 275
      },
      'adjacentByLand': [
        'bal',
        'ber',
        'lvn',
        'sil',
        'war'
      ],
      'adjacentBySea': [
        'bal',
        'ber',
        'lvn'
      ]
    },
    'rom': {
      'name': 'Rome',
      'tileType': 'landTile',
      'id': 'l Rome',
      'path': 'M 247 442 L 248 447 L 256 458 L 271 464 L 279 458 L 280 455 L 279 451 L 274 447 L 263 434 L 250 438 L 247 442',
      'textLocation': {
        'x': 257,
        'y': 444
      },
      'adjacentByLand': [
        'tys',
        'apu',
        'nap',
        'tus',
        'ven'
      ],
      'adjacentBySea': [
        'tys',
        'apu',
        'nap',
        'tus',
        'ven'
      ]
    },
    'ruh': {
      'name': 'Ruhr',
      'tileType': 'landTile',
      'id': 'l Ruhr',
      'path': 'M 213 302 L 210 313 L 208 315 L 210 326 L 205 331 L 204 338 L 211 346 L 219 344 L 237 322 L 243 322 L 241 316 L 232 308 L 213 302',
      'textLocation': {
        'x': 215,
        'y': 330
      },
      'adjacentByLand': [
        'bel',
        'bur',
        'hol',
        'kie',
        'mun'
      ],
      'adjacentBySea': [
        'bel',
        'hol',
        'kie'
      ]
    },
    'rum': {
      'name': 'Rumania',
      'tileType': 'landTile',
      'id': 'l Rumania',
      'path': 'M 403 360 L 404 371 L 394 376 L 395 382 L 401 385 L 406 396 L 401 402 L 387 402 L 367 406 L 365 412 L 367 421 L 370 425 L 375 423 L 382 427 L 390 425 L 398 427 L 404 422 L 410 420 L 422 420 L 430 423 L 432 409 L 439 404 L 438 397 L 427 399 L 422 382 L 423 376 L 414 372 L 411 361 L 403 360',
      'textLocation': {
        'x': 390,
        'y': 410
      },
      'adjacentByLand': [
        'bla',
        'bud',
        'gal',
        'ser',
        'sev',
        'ukr'
      ],
      'adjacentBySea': [
        'bla',
        'sev'
      ]
    },
    'ser': {
      'name': 'Serbia',
      'tileType': 'landTile',
      'id': 'l Serbia',
      'path': 'M 365 412 L 360 413 L 342 410 L 338 412 L 335 410 L 332 410 L 330 416 L 331 424 L 327 429 L 330 437 L 337 446 L 346 452 L 346 466 L 350 471 L 356 471 L 361 467 L 369 464 L 365 461 L 371 456 L 366 439 L 371 438 L 368 433 L 365 425 L 367 421 L 365 412',
      'textLocation': {
        'x': 340,
        'y': 440
      },
      'adjacentByLand': [
        'alb',
        'bud',
        'bul/sc',
        'gre',
        'rum',
        'tri'
      ],
      'adjacentBySea': []
    },
    'sev': {
      'name': 'Sevastopol',
      'tileType': 'landTile',
      'id': 'l Sevastopol',
      'path': 'M 438 397 L 446 378 L 459 375 L 461 377 L 459 379 L 465 383 L 476 381 L 478 383 L 472 385 L 468 392 L 477 396 L 477 401 L 486 404 L 488 397 L 494 396 L 497 392 L 507 389 L 506 384 L 494 387 L 485 378 L 503 364 L 526 351 L 527 354 L 514 365 L 517 371 L 520 371 L 515 384 L 511 383 L 510 386 L 517 393 L 528 394 L 554 406 L 567 408 L 573 417 L 570 427 L 589 442 L 594 439 L 603 441 L 609 440 L 609 330 L 597 330 L 569 321 L 564 305 L 554 304 L 549 284 L 533 283 L 526 287 L 516 286 L 505 280 L 494 295 L 477 289 L 468 295 L 470 303 L 466 307 L 460 345 L 445 350 L 434 360 L 432 372 L 423 376 L 422 382 L 427 399 L 438 397',
      'textLocation': {
        'x': 540,
        'y': 350
      },
      'adjacentByLand': [
        'bla',
        'arm',
        'mos',
        'rum',
        'ukr'
      ],
      'adjacentBySea': [
        'bla',
        'arm',
        'rum'
      ]
    },
    'sil': {
      'name': 'Silesia',
      'tileType': 'landTile',
      'id': 'l Silesia',
      'path': 'M 288 321 L 297 322 L 311 334 L 314 332 L 321 339 L 325 340 L 329 338 L 333 330 L 326 327 L 323 322 L 320 303 L 296 300 L 288 305 L 284 314 L 288 321',
      'textLocation': {
        'x': 298,
        'y': 318
      },
      'adjacentByLand': [
        'ber',
        'boh',
        'gal',
        'mun',
        'pru',
        'war'
      ],
      'adjacentBySea': []
    },
    'smy': {
      'name': 'Smyrna',
      'tileType': 'landTile',
      'id': 'l Smyrna',
      'path': 'M 417 489 L 420 495 L 417 498 L 417 507 L 423 510 L 427 524 L 435 523 L 435 530 L 441 526 L 447 528 L 453 534 L 464 531 L 466 521 L 475 520 L 485 528 L 491 530 L 505 526 L 511 514 L 520 517 L 527 508 L 530 509 L 536 494 L 545 486 L 555 484 L 563 479 L 562 471 L 556 467 L 555 460 L 546 462 L 531 460 L 508 480 L 501 482 L 490 480 L 473 491 L 466 491 L 452 495 L 432 493 L 423 487 L 417 489',
      'textLocation': {
        'x': 460,
        'y': 510
      },
      'adjacentByLand': [
        'aeg',
        'eas',
        'ank',
        'arm',
        'con',
        'syr'
      ],
      'adjacentBySea': [
        'aeg',
        'eas',
        'ank',
        'arm',
        'con',
        'syr'
      ]
    },
    'spa': {
      'name': 'Spain',
      'tileType': 'landTile',
      'id': 'l',
      'path': '',
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'spa/nc': {
      'name': 'Spain',
      'tileType': 'landTile',
      'id': 'l',
      'path': 'M 134 417 L 123 412 L 113 407 L 112 399 L 101 396 L 96 397 L 72 384 L 59 381 L 54 375 L 48 374 L 46 378 L 39 375 L 33 381 L 35 384 L 32 396 L 43 395 L 42 399 L 55 400 L 62 407 L 61 411 L 52 412 L 42 432 L 37 431 L 40 441 L 134 417',
      'adjacentByLand': [
        'mid',
        'gas',
        'por',
        'spa/sc'
      ],
      'adjacentBySea': [
        'mid',
        'gas',
        'por'
      ]
    },
    'spa/sc': {
      'name': 'Spain',
      'tileType': 'landTile',
      'id': 'l',
      'path': 'M 40 441 L 34 447 L 36 457 L 27 468 L 33 475 L 34 484 L 37 490 L 47 488 L 52 489 L 60 486 L 78 491 L 83 494 L 86 485 L 90 483 L 98 484 L 107 474 L 113 473 L 115 469 L 110 461 L 124 444 L 131 439 L 146 438 L 157 432 L 158 425 L 154 427 L 142 417 L 135 414 L 134 417 L 40 441',
      'textLocation': {
        'x': 85,
        'y': 450
      },
      'adjacentByLand': [
        'gol',
        'mid',
        'wes',
        'gas',
        'mar',
        'por',
        'spa/nc'
      ],
      'adjacentBySea': [
        'gol',
        'mid',
        'wes',
        'gas',
        'mar',
        'por'
      ]
    },
    'stp': {
      'name': 'St Petersburg',
      'tileType': 'landTile',
      'id': 'l St_Petersburg',
      'path': '',
      'textLocation': {
        'x': 460,
        'y': 149
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'stp/nc': {
      'name': 'St Petersburg',
      'tileType': 'landTile',
      'id': 'l St_Petersburg',
      'path': 'M 534 164 L 564 159 L 573 143 L 598 132 L 609 117 L 609 0 540 0 L 535 9 L 530 6 L 517 19 L 516 33 L 513 38 L 513 23 L 507 20 L 505 26 L 499 33 L 492 48 L 495 58 L 488 60 L 479 57 L 477 55 L 481 50 L 473 43 L 466 45 L 472 62 L 478 66 L 478 74 L 472 72 L 468 74 L 457 91 L 469 100 L 467 106 L 462 109 L 444 101 L 442 110 L 447 115 L 454 119 L 452 122 L 434 118 L 426 103 L 426 94 L 414 88 L 412 83 L 445 84 L 457 79 L 459 66 L 453 61 L 417 47 L 405 49 L 401 45 L 397 48 L 388 61 L 387 68 L 393 73 L 392 92 L 401 110 L 402 118 L 410 130 L 414 147 L 534 164',
      'textLocation': {
        'x': 460,
        'y': 149
      },
      'adjacentByLand': [
        'bar',
        'fin',
        'mos',
        'stp/sc'
      ],
      'adjacentBySea': [
        'bar',
        'nwy'
      ]
    },
    'stp/sc': {
      'name': 'St Petersburg',
      'tileType': 'landTile',
      'id': 'l St_Petersburg',
      'path': 'M 414 147 L 410 152 L 412 161 L 402 177 L 403 183 L 411 184 L 414 187 L 408 187 L 400 192 L 399 197 L 387 196 L 371 198 L 369 202 L 372 205 L 382 206 L 394 205 L 405 217 L 409 228 L 421 229 L 428 225 L 439 211 L 447 209 L 451 213 L 457 210 L 456 207 L 458 194 L 476 183 L 489 184 L 515 169 L 534 164 L 414 147',
      'textLocation': {
        'x': 408,
        'y': 200
      },
      'adjacentByLand': [
        'bot',
        'fin',
        'lvn',
        'mos',
        'stp/nc'
      ],
      'adjacentBySea': [
        'bot',
        'fin',
        'lvn'
      ]
    },
    'swe': {
      'name': 'Sweden',
      'tileType': 'landTile',
      'id': 'l Sweden',
      'path': 'M 275 203 L 277 218 L 276 224 L 282 236 L 279 240 L 279 243 L 282 253 L 289 254 L 294 245 L 305 244 L 312 229 L 311 220 L 314 209 L 322 206 L 328 203 L 331 193 L 326 183 L 320 182 L 321 161 L 330 146 L 343 138 L 351 128 L 347 121 L 349 112 L 355 104 L 362 107 L 356 71 L 342 61 L 341 65 L 330 64 L 332 74 L 324 71 L 311 101 L 308 104 L 309 115 L 300 126 L 301 132 L 292 133 L 290 164 L 285 170 L 287 177 L 279 204 L 275 203',
      'textLocation': {
        'x': 300,
        'y': 145
      },
      'adjacentByLand': [
        'bal',
        'bot',
        'ska',
        'den',
        'fin',
        'nwy'
      ],
      'adjacentBySea': [
        'bal',
        'bot',
        'ska',
        'den',
        'fin',
        'nwy'
      ]
    },
    'syr': {
      'name': 'Syria',
      'tileType': 'landTile',
      'id': 'l Syria',
      'path': 'M 530 509 L 536 494 L 545 486 L 555 484 L 563 479 L 584 478 L 609 493 L 609 559 L 528 559 L 532 535 L 526 530 L 525 518 L 530 509',
      'textLocation': {
        'x': 570,
        'y': 535
      },
      'adjacentByLand': [
        'eas',
        'arm',
        'smy'
      ],
      'adjacentBySea': [
        'eas',
        'arm',
        'smy'
      ]
    },
    'tri': {
      'name': 'Trieste',
      'tileType': 'landTile',
      'id': 'l Trieste',
      'path': 'M 276 399 L 275 403 L 278 410 L 282 401 L 286 402 L 289 418 L 306 436 L 331 454 L 330 445 L 337 446 L 330 437 L 327 429 L 331 424 L 330 416 L 332 410 L 323 408 L 321 398 L 311 394 L 308 383 L 299 385 L 294 380 L 289 385 L 276 386 L 279 389 L 276 399',
      'textLocation': {
        'x': 305,
        'y': 425
      },
      'adjacentByLand': [
        'adr',
        'alb',
        'bud',
        'ser',
        'tyr',
        'ven',
        'vie'
      ],
      'adjacentBySea': [
        'adr',
        'alb',
        'ven'
      ]
    },
    'tun': {
      'name': 'Tunis',
      'tileType': 'landTile',
      'id': 'l Tunis',
      'path': 'M 232 559 L 234 551 L 232 544 L 225 535 L 231 531 L 236 524 L 233 523 L 224 527 L 223 518 L 218 516 L 212 517 L 208 521 L 203 520 L 197 527 L 195 559 L 232 559',
      'textLocation': {
        'x': 208,
        'y': 550
      },
      'adjacentByLand': [
        'ion',
        'tys',
        'wes',
        'naf'
      ],
      'adjacentBySea': [
        'ion',
        'tys',
        'wes',
        'naf'
      ]
    },
    'tus': {
      'name': 'Tuscany',
      'tileType': 'landTile',
      'id': 'l Tuscany',
      'path': 'M 233 415 L 238 431 L 247 442 L 250 438 L 263 434 L 253 418 L 246 416 L 240 415 L 236 411 L 233 415',
      'textLocation': {
        'x': 240,
        'y': 425
      },
      'adjacentByLand': [
        'gol',
        'tys',
        'pie',
        'rom',
        'ven'
      ],
      'adjacentBySea': [
        'gol',
        'tys',
        'pie',
        'rom',
        'ven'
      ]
    },
    'tyr': {
      'name': 'Tyrolia',
      'tileType': 'landTile',
      'id': 'l Tyrolia',
      'path': 'M 234 366 L 243 370 L 246 369 L 250 371 L 267 368 L 271 370 L 269 362 L 275 362 L 281 356 L 292 357 L 295 362 L 294 380 L 289 385 L 276 386 L 268 385 L 259 388 L 255 394 L 250 397 L 246 392 L 243 388 L 245 384 L 241 378 L 234 374 L 234 366',
      'textLocation': {
        'x': 255,
        'y': 380
      },
      'adjacentByLand': [
        'boh',
        'mun',
        'pie',
        'tri',
        'ven',
        'vie'
      ],
      'adjacentBySea': []
    },
    'ukr': {
      'name': 'Ukraine',
      'tileType': 'landTile',
      'id': 'l Ukraine',
      'path': 'M 383 327 L 385 332 L 399 338 L 404 354 L 403 360 L 411 361 L 414 372 L 423 376 L 432 372 L 434 360 L 445 350 L 460 345 L 466 307 L 470 303 L 468 295 L 456 292 L 390 306 L 386 309 L 383 327',
      'textLocation': {
        'x': 420,
        'y': 340
      },
      'adjacentByLand': [
        'gal',
        'mos',
        'rum',
        'sev',
        'war'
      ],
      'adjacentBySea': []
    },
    'ven': {
      'name': 'Venice',
      'tileType': 'landTile',
      'id': 'l Venice',
      'path': 'M 278 443 L 272 424 L 260 417 L 261 401 L 270 398 L 276 399 L 279 389 L 276 386 L 268 385 L 259 388 L 255 394 L 250 397 L 246 392 L 233 404 L 236 411 L 240 415 L 246 416 L 253 418 L 263 434 L 274 447 L 278 443',
      'textLocation': {
        'x': 245,
        'y': 407
      },
      'adjacentByLand': [
        'adr',
        'apu',
        'pie',
        'rom',
        'tri',
        'tus',
        'tyr'
      ],
      'adjacentBySea': [
        'adr',
        'apu',
        'pie',
        'rom',
        'tri',
        'tus'
      ]
    },
    'vie': {
      'name': 'Vienna',
      'tileType': 'landTile',
      'id': 'l Vienna',
      'path': 'M 292 357 L 295 349 L 303 346 L 316 348 L 322 347 L 329 346 L 337 350 L 335 354 L 322 370 L 311 375 L 308 383 L 299 385 L 294 380 L 295 362 L 292 357',
      'textLocation': {
        'x': 305,
        'y': 356
      },
      'adjacentByLand': [
        'boh',
        'bud',
        'gal',
        'tri',
        'tyr'
      ],
      'adjacentBySea': []
    },
    'wal': {
      'name': 'Wales',
      'tileType': 'landTile',
      'id': 'l Wales',
      'path': 'M 100 291 L 112 287 L 122 281 L 130 282 L 127 276 L 119 272 L 116 272 L 115 265 L 128 262 L 143 262 L 150 264 L 153 271 L 150 277 L 145 281 L 147 295 L 134 294 L 124 291 L 120 295 L 110 292 L 100 291',
      'textLocation': {
        'x': 130,
        'y': 275
      },
      'adjacentByLand': [
        'eng',
        'iri',
        'lvp',
        'lon',
        'yor'
      ],
      'adjacentBySea': [
        'eng',
        'iri',
        'lvp',
        'lon',
        'yor'
      ]
    },
    'war': {
      'name': 'Warsaw',
      'tileType': 'landTile',
      'id': 'l Warsaw',
      'path': 'M 333 330 L 326 327 L 323 322 L 320 303 L 324 299 L 326 292 L 341 287 L 345 289 L 359 286 L 365 281 L 372 283 L 379 290 L 386 309 L 383 327 L 379 324 L 374 327 L 367 329 L 361 324 L 356 323 L 353 327 L 344 332 L 341 330 L 333 330',
      'textLocation': {
        'x': 345,
        'y': 316
      },
      'adjacentByLand': [
        'gal',
        'lvn',
        'mos',
        'pru',
        'sil',
        'ukr'
      ],
      'adjacentBySea': []
    },
    'yor': {
      'name': 'Yorkshire',
      'tileType': 'landTile',
      'id': 'l Yorkshire',
      'path': 'M 163 226 L 163 239 L 168 246 L 170 252 L 169 265 L 166 269 L 153 271 L 150 264 L 151 248 L 155 239 L 155 228 L 163 226',
      'textLocation': {
        'x': 160,
        'y': 248
      },
      'adjacentByLand': [
        'nth',
        'edi',
        'lvp',
        'lon',
        'wal'
      ],
      'adjacentBySea': [
        'nth',
        'edi',
        'lvp',
        'lon',
        'wal'
      ]
    },
    'n/swi': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': 'M 209 363 L 208 367 L 194 382 L 197 385 L 203 379 L 207 386 L 213 387 L 221 385 L 227 390 L 229 385 L 243 388 L 245 384 L 241 378 L 234 374 L 234 366 L 232 363 L 225 362 L 222 365 L 209 363',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/ire': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': 'M 70 261 L 64 250 L 67 242 L 71 245 L 81 234 L 74 228 L 80 225 L 78 218 L 82 217 L 89 220 L 94 220 L 95 218 L 94 216 L 97 216 L 101 212 L 110 212 L 119 217 L 120 227 L 120 227 L 110 232 L 109 246 L 98 259 L 87 257 L 70 261',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/cor': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': '',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/sar': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': '',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/mal': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': 'M 154 466 L 148 463 L 142 469 L 150 471 L 154 466',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/sic': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': '',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    },
    'n/cre': {
      'name': '',
      'tileType': 'landTile',
      'id': 's',
      'path': '',
      'textLocation': {
        'x': 215,
        'y': 378
      },
      'adjacentByLand': [],
      'adjacentBySea': []
    }
  }
}

export default countryData
