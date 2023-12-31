;(() => {
    'use strict'
    var e = {
        d: (t, a) => {
            for (var n in a)
                e.o(a, n) &&
                    !e.o(t, n) &&
                    Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    }
    e.d({}, { Z: () => d })
    const t = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        a = ['clubs', 'diamonds', 'hearts', 'spades']
    function n(e, t, a, n) {
        const r = (e) => {
                for (let t = e.length - 1; t > 0; t--) {
                    const a = Math.floor(Math.random() * (t + 1))
                    ;[e[t], e[a]] = [e[a], e[t]]
                }
                return e
            },
            s = r(
                t.flatMap((e) =>
                    a.map((t) => ({ cardsGrade: e, cardsSuit: t })),
                ),
            ).slice(0, e),
            c = r([...s, ...s])
        n && n(c)
    }
    function r(e, t, a, n) {
        var r, s, c
        const l = document.querySelector('#app'),
            i = `\n        <div class="wrapper renderResult-page__wrapper">\n            <div class="renderResult-page next-page__result">\n                <img class="renderResult__img" src=${t} alt="">\n                <h1 class="renderResult__title">${e}</h1>\n                <p class="renderResult__text">Затраченное время:</p>\n                <div class="renderResult__time">\n                    <p class="renderResult__minute">0${n}.</p>\n                    <p class="renderResult__second">${a}</p>\n                </div>\n\n                <button class="btn btn__renderResult-start" type="submit">\n                    Играть снова\n                </button>\n            </div>\n        </div>\n    `
        l && l.insertAdjacentHTML('beforeend', i)
        const o = document.querySelector('.renderResult__second')
        a <= 9 && o && (o.textContent = '0' + a),
            null === (r = document.querySelector('.renderResult-page')) ||
                void 0 === r ||
                r.classList.remove('none'),
            null === (s = document.querySelector('.next-page')) ||
                void 0 === s ||
                s.classList.add('blur'),
            null === (c = document.querySelector('.btn__renderResult-start')) ||
                void 0 === c ||
                c.addEventListener('click', () => {
                    d()
                })
    }
    function s(e) {
        localStorage.setItem('level', JSON.stringify(e))
    }
    function c() {
        return localStorage.getItem('level')
            ? JSON.parse(localStorage.getItem('level'))
            : 'easy'
    }
    function d() {
        var e, l, i, o
        const u = document.querySelector('#app'),
            p = `\n                <div class="wrapper">\n                    <div class="main__start-page">\n                        <h1 class="main__title">Выбери сложность</h1>\n                        <div class="main__btns">\n                            <label class="custom-radio custom-radio_1">\n                                <input type="radio" ${
                'easy' === c() ? 'checked' : null
            } name="checkbox" value="easy">\n                                <span></span>\n                            </label>\n                            <label class="custom-radio custom-radio_2">\n                                <input type="radio" ${
                'medium' === c() ? 'checked' : null
            } name="checkbox" value="medium">\n                                <span></span>\n                            </label>\n                            <label class="custom-radio custom-radio_3">\n                                <input type="radio" ${
                'hard' === c() ? 'checked' : null
            } name="checkbox" value="hard">\n                                <span></span>\n                            </label>\n                        </div>\n                        <button class="btn main__btn-start" type="submit">\n                            Старт\n                        </button>\n                    </div>\n                </div>\n    `
        u && (u.innerHTML = p),
            null === (e = document.querySelector('.custom-radio_1')) ||
                void 0 === e ||
                e.addEventListener('change', () => s('easy')),
            null === (l = document.querySelector('.custom-radio_2')) ||
                void 0 === l ||
                l.addEventListener('change', () => s('medium')),
            null === (i = document.querySelector('.custom-radio_3')) ||
                void 0 === i ||
                i.addEventListener('change', () => s('hard')),
            null === (o = document.querySelector('.main__btn-start')) ||
                void 0 === o ||
                o.addEventListener('click', () =>
                    (function () {
                        switch (JSON.parse(localStorage.getItem('level'))) {
                            case 'easy':
                                n(3, t, a, i)
                                break
                            case 'medium':
                                n(6, t, a, i)
                                break
                            case 'hard':
                                n(9, t, a, i)
                        }
                        const e = document.querySelectorAll('.play-card__back')
                        for (const t of e)
                            t.addEventListener('click', () => {
                                t.classList.add('none')
                            })
                        const s = Array.from(
                            document.querySelectorAll('.play-card'),
                        )
                        let c, l
                        function i(e) {
                            !(function () {
                                var e
                                const t = document.querySelector('#app')
                                t &&
                                    (t.innerHTML =
                                        '\n            <div class="next-page">\n                <div class="next-page__header">\n                    <div class="next-page__tamer">\n                        <p class="next-page__title">min</p>\n                        <div class="next-page__time">\n                            <p class="next-page__minute">00.</p>\n                            <p class="next-page__second">00</p>\n                        </div>\n                    </div>\n                    <button class="btn next-page__btn">Начать заново</button>\n                </div>\n                <div class="next-page__cards">\n                </div>\n            </div>\n    '),
                                    null ===
                                        (e =
                                            document.querySelector(
                                                '.next-page__btn',
                                            )) ||
                                        void 0 === e ||
                                        e.addEventListener('click', () => {
                                            d()
                                        })
                            })(),
                                e.forEach((e) => {
                                    !(function (e) {
                                        var t
                                        const a = `\n        <div class="play-card disabled" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">\n            <p class="play-card__text play-card__text_head" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">${e.cardsGrade}</p>\n            <img class="play-card__back none" src="./static/img/card-back.png" alt="" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">\n            <img class="play-card__img play-card__img_head" src="./static/img/${e.cardsSuit}.svg" alt="" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">\n            <img class="play-card__img play-card__img_middle" src="./static/img/${e.cardsSuit}.svg" alt="" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">\n            <img class="play-card__img play-card__img_footer" src="./static/img/${e.cardsSuit}.svg" alt="" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">\n            <p class="play-card__text play-card__text_footer" data-cardsSuit="${e.cardsSuit}" data-cardsGrade="${e.cardsGrade}">${e.cardsGrade}</p>\n        </div>\n    `
                                        null ===
                                            (t =
                                                document.querySelector(
                                                    '.next-page__cards',
                                                )) ||
                                            void 0 === t ||
                                            t.insertAdjacentHTML(
                                                'afterbegin',
                                                a,
                                            )
                                    })(e)
                                })
                        }
                        s.forEach((e) =>
                            e.addEventListener('click', () => {
                                e.classList.add('open')
                                let t = s.filter((e) =>
                                    e.classList.contains('open'),
                                )
                                t.forEach((e) => e.classList.add('win-card'))
                                const a = s.filter((e) =>
                                    e.classList.contains('win-card'),
                                )
                                if (
                                    (a.length === s.length &&
                                        ((c = 'Вы победили!'),
                                        (l = './static/img/win-icon.png'),
                                        g(),
                                        setTimeout(() => r(c, l, _, m), 250)),
                                    2 === t.length)
                                ) {
                                    if (
                                        t[0].getAttribute('data-cardsGrade') ===
                                            t[1].getAttribute(
                                                'data-cardsGrade',
                                            ) &&
                                        t[0].getAttribute('data-cardsSuit') ===
                                            t[1].getAttribute('data-cardsSuit')
                                    )
                                        return void t.forEach((e) =>
                                            e.classList.remove('open'),
                                        )
                                    ;(t[0].getAttribute('data-cardsGrade') ===
                                        t[1].getAttribute('data-cardsGrade') &&
                                        t[0].getAttribute('data-cardsSuit') ===
                                            t[1].getAttribute(
                                                'data-cardsSuit',
                                            )) ||
                                        (t.forEach((e) =>
                                            e.classList.remove('open'),
                                        ),
                                        g(),
                                        (c = 'Вы проиграли!'),
                                        (l =
                                            './static/img/lose-icon.png'),
                                        setTimeout(() => r(c, l, _, m), 250)),
                                        (t = [])
                                }
                            }),
                        ),
                            setTimeout(() => {
                                document
                                    .querySelectorAll('.play-card__back')
                                    .forEach((e) => {
                                        e.classList.remove('none')
                                    }),
                                    document
                                        .querySelectorAll('.play-card')
                                        .forEach((e) => {
                                            e.classList.remove('disabled')
                                        }),
                                    v(),
                                    clearInterval(p),
                                    (p = setInterval(v, 1e3))
                            }, 5e3)
                        const o = document.querySelector('.next-page__second'),
                            u = document.querySelector('.next-page__minute')
                        let p,
                            _ = 0,
                            m = 0
                        function g() {
                            clearInterval(p)
                        }
                        function v() {
                            _++,
                                _ <= 9 && o && (o.textContent = '0' + _),
                                _ > 9 && o && (o.textContent = String(_)),
                                _ > 59 &&
                                    (m++,
                                    m < 9 &&
                                        (u && (u.textContent = '0' + m + '.'),
                                        (_ = 0)),
                                    3 === m &&
                                        (g(),
                                        (c = 'Вы проиграли!'),
                                        (l =
                                            './../../static/img/lose-icon.svg'),
                                        setTimeout(() => r(c, l, _, m), 250)))
                        }
                    })(),
                )
    }
    c(), d()
})()
