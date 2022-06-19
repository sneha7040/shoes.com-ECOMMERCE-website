function essentialCountdownCloseAnnouncementBar(b, c) {
  let a = document.querySelector(`.countdown_annoucement_bar_wrapper_${b}`);
  if (a) {
    a.parentNode.removeChild(a);
    try {
      window.localStorage.setItem(
        'countdownTimerAnnoucementBarClosed',
        JSON.stringify({ value: !0, id: b, updatedAt: c })
      );
    } catch (d) {
      console.log(d);
    }
  }
}
function essentialCountdownCloseAnnouncementBarOnClick(b, a) {
  !b.target.closest('button') && a && (window.location.href = a);
}
!(function () {
  function a(b) {
    let c = document.getElementsByTagName('head')[0],
      a = document.createElement('style');
    a.setAttribute('type', 'text/css'),
      a.setAttribute('id', 'countdown_timer'),
      a.styleSheet
        ? (a.styleSheet.cssText = b)
        : a.appendChild(document.createTextNode(b)),
      c.appendChild(a);
  }
  function b(a) {
    return '' !== a.font && a.font
      ? `font-family: ${a.font};
`
      : '';
  }
  function c(c, d) {
    let a = c.style;
    return `
      .countdown_wrapper_${c.id} {
          display: grid;
          grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr;
          ${'top-bar' === d ? 'row-gap: 0;' : 'row-gap: 6px;'}  
          justify-items: center;
          align-items: center;
          column-gap: 5px;
          direction: ltr;
          ${
            'top-bar' === d ? 'column-gap: 2px;' : 'padding-top: 4px;'
          }          
      }

      .countdown_time_${c.id} {
          ${b(a)}color: ${a.timerColor};
          font-weight: bold;
          font-size: ${a.timerSize}px;
          line-height: 1;
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
          ${'top-bar' !== d && 'padding-top: 4px;'}       
      }

      .countdown_legend_${c.id} {
          ${b(a)}color: ${a.legendColor};
          font-size: ${a.legendSize}px;
          padding-right: 10px;
          grid-column: 2 span;
          line-height: 1;
      }

      .countdown_legend_${c.id}.last {
        grid-column: auto;
        padding-right: 0;
      }`;
  }
  function d(e) {
    let d = e.style,
      f =
        'gradientBackground' === d.backgroundType
          ? `linear-gradient(${d.gradientTurn}deg, ${d.gradientStart}, ${d.gradientEnd})`
          : d.singleColor,
      g = `
        .countdown_timer_wrapper_${e.id} {
            display: flex;
            flex-flow: column;
            ${b(d)}background: ${f};
            ${
              void 0 !== d.insideTopSpacing
                ? `margin-top: ${d.outsideTopSpacing}px;
                   margin-bottom: ${d.outsideBottomSpacing}px;
                   padding-top: ${d.insideTopSpacing}px;
                   padding-bottom: ${d.insideBottomSpacing}px;
                `
                : `margin: 20px 0;
                   padding: 30px;`
            }
            border-radius: ${d.borderRadius}px;
            border: ${d.borderColor} solid ${d.borderSize}px;
            text-align: center;
            flex:auto;
            align-items: center;
        }

        .countdown_timer_wrapper_${e.id}.clickable {
          cursor: pointer;
        }
    
        .countdown_timer_wrapper_${e.id} h2 {
            ${b(d)}font-weight: bold;
            font-size: ${d.titleSize}px;
            color: ${d.titleColor};
            margin: 0;
            padding: 0;
            line-height: 1.2;
            letter-spacing: normal;
            text-transform: none;
        }
    
        .countdown_timer_subheading_${e.id} {
            ${b(d)}font-size: ${d.subheadingSize}px;
            color: ${d.subheadingColor};
            line-height: 1.2;
            letter-spacing: normal;
            padding: 0;
            padding-top: 2px;
            margin: 0;
        }

        .countdown_timer_bar_cta_${e.id} {
          display: block;        
          cursor: pointer;
          text-decoration: none;
          background: ${d.buttonBackgroundColor};
          border: 0;
          white-space: nowrap;
          padding: 8px 16px;
          line-height: 1.5;
          border-radius: ${d.buttonBorderRadius}px;
          font-size: ${d.buttonFontSize}px;
          color: ${d.buttonFontColor};
          margin-top: 16px;
        }
    
        ${c(e, 'product-page')}
    `;
    a(g);
  }
  function e(a) {
    return 1 === a.toString().length ? `0${a}` : a;
  }
  function f(o, l, a) {
    let b,
      m = new Date(o + 6e4 * a.fixedMinutes),
      g = new Date().getTime();
    if ('toDate' === a.timerType) b = new Date(a.endDate) - g;
    else {
      b = l ? m - (6e4 * a.fixedMinutes - l) - g : m - g;
      try {
        window.localStorage.setItem(
          `essentialCountdownTimer-${a.id}`,
          `${b}, ${new Date().getTime()}, ${a.timerType}-${a.fixedMinutes}-${
            a.id
          }`
        );
      } catch (p) {
        console.log(p);
      }
    }
    if (b < 0) {
      if ('custom-title' === a.onceItEnds) {
        var c;
        let d, f;
        'product-page' === (c = a).type
          ? ((d = document.querySelector(
              `.countdown_timer_wrapper_${c.id} h2`
            )),
            (f = document.querySelector(`.countdown_timer_subheading_${c.id}`)))
          : ((d = document.querySelector(
              `.countdown_annoucement_bar_wrapper_${c.id} h2`
            )),
            (f = document.querySelector(
              `.countdown_annoucement_bar_subheading_${c.id}`
            ))),
          f && f.remove(),
          d && (d.textContent = c.customTitle);
      }
      if ('hide' === a.onceItEnds || '' === a.onceItEnds) {
        let n;
        (n =
          'product-page' === a.type
            ? document.querySelector(`.countdown_timer_wrapper_${a.id}`)
            : document.querySelector(
                `.countdown_annoucement_bar_wrapper_${a.id}`
              )) && n.remove();
      }
      return;
    }
    let h = Math.floor(b / 864e5);
    h = e(h);
    let i = Math.floor((b % 864e5) / 36e5);
    i = e(i);
    let j = Math.floor((b % 36e5) / 6e4);
    j = e(j);
    let k = Math.floor((b % 6e4) / 1e3);
    return (k = e(k)), { days: h, hours: i, minutes: j, seconds: k };
  }
  function g(i, a) {
    let c = Number(new Date().getTime()),
      d,
      e,
      b,
      g;
    try {
      (b = window.localStorage.getItem('countdownTimer')) ||
        (b = window.localStorage.getItem(`essentialCountdownTimer-${a.id}`));
    } catch (j) {
      console.log(j);
    }
    b &&
      (([d, e, g] = b && b.split(',')),
      -1 === g.indexOf(`${a.timerType}-${a.fixedMinutes}-${a.id}`) &&
        (window.localStorage.removeItem('countdownTimer'),
        (b = null),
        (d = null))),
      b && parseInt(e) + 6e4 * a.fixedMinutes > c && (c = parseInt(e)),
      h(f(c, d, a), i, a);
    let k = setInterval(() => {
      let b = f(c, d, a);
      (a.repeat || 'repeat' === a.onceItEnds) &&
      'fixedMinutes' === a.timerType &&
      !b
        ? ((d = 0), (c = Number(new Date().getTime())))
        : b || clearInterval(k),
        h(f(c, d, a), i, a);
    }, 1e3);
  }
  function h(a, b, d) {
    let c = document.createElement('div');
    (c.className = `countdown_wrapper_${d.id}`),
      a || (a = { days: '00', hours: '00', minutes: '00', seconds: '00' }),
      Object.values(a).forEach((e, f) => {
        let a = document.createElement('div');
        (a.className = `countdown_time_${d.id}`), (a.textContent = e);
        let b = a.cloneNode(!0);
        (b.textContent = ':'), c.append(a), 3 !== f && c.append(b);
      }),
      (b.innerHTML = ''),
      i(c, b, d),
      b.append(c);
  }
  function i(b, c, a) {
    let d = [
      a.legendCopyDays,
      a.legendCopyHours,
      a.legendCopyMins,
      a.legendCopySecs,
    ];
    d.forEach((d, e) => {
      let c = document.createElement('div');
      (c.className = `countdown_legend_${a.id}`),
        3 === e && (c.className = `countdown_legend_${a.id} last`),
        (c.textContent = d),
        b.append(c);
    }),
      c.append(b);
  }
  function j(a, h) {
    if (l(a)) return;
    let b = document.createElement('div');
    b.className = `countdown_timer_wrapper_${a.id}`;
    let e = document.createElement('h2');
    e.textContent += a.title;
    let c = document.createElement('p');
    (c.className = `countdown_timer_subheading_${a.id}`),
      (c.textContent += a.subheading);
    let f = document.createElement('div');
    b.append(e), b.append(c), b.append(f), d(a), h.append(b), g(f, a);
  }
  function k(a, h, k = !0, m = !1) {
    if (l(a)) return;
    let c = document.createElement('div');
    c.className = m ? 'page-width' : '';
    let b = document.createElement('div');
    b.className = `countdown_timer_wrapper_${a.id}`;
    let i = document.createElement('h2');
    i.textContent += a.title;
    let f = document.createElement('p');
    (f.className = `countdown_timer_subheading_${a.id}`),
      (f.textContent += a.subheading);
    let j = document.createElement('div');
    'clickable' === a.CTAType &&
      a.CTALink &&
      ((b.className += ' clickable'),
      b.setAttribute(
        'onclick',
        `essentialCountdownCloseAnnouncementBarOnClick(event, "${a.CTALink}")`
      ));
    let e = document.createElement('a');
    (e.className = `countdown_timer_bar_cta_${a.id}`),
      e.setAttribute('href', a.CTALink),
      (e.textContent += a.buttonText),
      b.append(i),
      b.append(f),
      b.append(j),
      'button' === a.CTAType && b.append(e),
      d(a),
      c.append(b),
      k ? h.append(c) : h.prepend(c),
      g(j, a);
  }
  function l(a) {
    if (a.startDate) {
      let b = Number(new Date().getTime()),
        c = Number(new Date(a.startDate).getTime());
      return !(b >= c);
    }
    return !1;
  }
  !(function () {
    let f = window.location && window.location.pathname.includes('/products/'),
      h = window.location && window.location.pathname.includes('/collections/'),
      i = window.location && window.location.pathname.includes('/password'),
      m = document.querySelectorAll('form[action="/cart/add"]'),
      n = document.querySelector('.collection-hero'),
      o = document.querySelector('form#contact_form'),
      p = document.querySelector('.essential-countdown-timer-placement'),
      d = document.querySelectorAll('div.countdown-timer-block'),
      e = [],
      q = (a, b, c) => {
        if (a.type !== b || (c && 'custom' === a.timerPlacement)) return !1;
        if (a.showOnProducts && 0 !== a.showOnProducts.length) {
          let e = decodeURI(window.location.pathname),
            d = a.showOnProducts.find((a) =>
              e.includes(`products/${a.handle}`)
            );
          if (!d) return !1;
        }
        return !0;
      },
      r = (a, c, b) => {
        if (
          a.type !== c ||
          (b && 'custom' === a.timerPlacement) ||
          (b && 'password-page' === a.timerPlacement)
        )
          return !1;
        if (a.showOnCollections && 0 !== a.showOnCollections.length) {
          let e = decodeURI(window.location.pathname),
            d = a.showOnCollections.find((a) =>
              e.includes(`collections/${a.handle}`)
            );
          if (!d) return !1;
        }
        return !0;
      },
      s = (a, c, b) =>
        a.type === c &&
        (!b || 'custom' !== a.timerPlacement) &&
        (!b || '' !== a.timerPlacement) &&
        (!a.timerPlacement || 'password-page' === a.timerPlacement);
    d &&
      d.length > 0 &&
      (e = Array.from(d).filter(
        (a) => a && '' !== a.getAttribute('countdown-timer-id')
      )),
      (function () {
        let a = window.Shopify ? window.Shopify.shop : window.location.origin,
          b = `https://cache-essential-apps.cc/config/${a}`;
        return fetch(b).then((a) => a.json());
      })().then((d) => {
        if (d && !Array.isArray(d) && 0 === d.length) return null;
        let x = d.filter((a) => 'top-bar' === a.type);
        if (
          (x.forEach((d) => {
            d &&
              q(d, 'top-bar') &&
              r(d, 'top-bar') &&
              (function (d) {
                let p = document.querySelector(
                  '.essential_countdown_annoucement_bar_wrapper'
                );
                if (p || l(d)) return;
                if (d.timerPlacement) {
                  let q = window.location.pathname;
                  if (
                    ('home-page' === d.timerPlacement && '/' !== q) ||
                    ('all-products' === d.timerPlacement &&
                      !window.location.pathname.includes('/products/')) ||
                    ('all-collections' === d.timerPlacement &&
                      !window.location.pathname.includes('/collections/'))
                  )
                    return;
                }
                let e = document.createElement('div');
                e.className = `essential_countdown_annoucement_bar_wrapper countdown_annoucement_bar_wrapper_${d.id}`;
                try {
                  let f = window.localStorage.getItem(
                    'countdownTimerAnnoucementBarClosed'
                  );
                  if (
                    (f = JSON.parse(f)) &&
                    f.id === d.id &&
                    f.updatedAt === d.updatedAt &&
                    f.value
                  )
                    return;
                } catch (r) {
                  console.log(r);
                }
                'top-page' === d.style.position &&
                  d.style.stickyBar &&
                  (e.className += ' top_page'),
                  'bottom-page' === d.style.position &&
                    (e.className += ' bottom_page'),
                  'clickable' === d.CTAType &&
                    d.CTALink &&
                    ((e.className += ' clickable'),
                    e.setAttribute(
                      'onclick',
                      `essentialCountdownCloseAnnouncementBarOnClick(event, "${d.CTALink}")`
                    ));
                let j = document.createElement('h2');
                j.setAttribute('id', `countdown_annoucement_bar_title_${d.id}`),
                  (j.textContent += d.title);
                let k = document.createElement('p');
                (k.className = `countdown_annoucement_bar_subheading_${d.id}`),
                  (k.textContent += d.subheading);
                let m = document.createElement('div');
                m.append(j), m.append(k);
                let n = document.createElement('div'),
                  h = document.createElement('a');
                (h.className = `countdown_annoucement_bar_cta_${d.id}`),
                  h.setAttribute('href', d.CTALink),
                  (h.textContent += d.buttonText);
                let i = document.createElement('button');
                (i.className = `countdown_annoucement_bar_close_button_${d.id}`),
                  i.setAttribute(
                    'onclick',
                    `essentialCountdownCloseAnnouncementBar("${d.id}", "${d.updatedAt}")`
                  ),
                  i.append(
                    (function (c) {
                      let a = document.createElementNS(
                          'http://www.w3.org/2000/svg',
                          'svg'
                        ),
                        b = document.createElementNS(
                          'http://www.w3.org/2000/svg',
                          'path'
                        );
                      return (
                        a.setAttribute('width', 12),
                        a.setAttribute('height', 12),
                        a.setAttribute('fill', 'none'),
                        b.setAttribute(
                          'd',
                          'm7.414 6 4.293-4.293A.999.999 0 1 0 10.293.293L6 4.586 1.707.293A.999.999 0 1 0 .293 1.707L4.586 6 .293 10.293a.999.999 0 1 0 1.414 1.414L6 7.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.414 6Z'
                        ),
                        b.setAttribute('fill', c),
                        a.append(b),
                        a
                      );
                    })(d.style.closeIconColor)
                  ),
                  e.append(m),
                  e.append(n),
                  'button' === d.CTAType && e.append(h),
                  d.closeButton && e.append(i),
                  (function (e) {
                    let d = e.style,
                      f =
                        'gradientBackground' === d.backgroundType
                          ? `linear-gradient(${d.gradientTurn}deg, ${d.gradientStart}, ${d.gradientEnd})`
                          : d.singleColor,
                      g = `
        .countdown_annoucement_bar_wrapper_${e.id} {
          position: relative;
          ${b(d)}background: ${f};
          z-index: 100;
          display: flex !important;
          width: 100%;
          flex-wrap: wrap;
          ${
            'seperate-centered' === d.announcementBarStyle
              ? `flex-flow: column;
              justify-items: center;`
              : ''
          }

          align-items: center;
          justify-content: center;
          padding: 10px;
          column-gap: 26px;
          row-gap: 10px;
          border-bottom: ${d.borderColor} solid ${d.borderSize}px;
        }

        .countdown_annoucement_bar_wrapper_${e.id}.top_page {
          position: sticky; 
          top: 0;
        }

        .countdown_annoucement_bar_wrapper_${e.id}.bottom_page {
          bottom: 0; 
          left: 0;
          position: fixed;
          width: 100%;
          border-bottom: none;
          border-top: ${d.borderColor} solid ${d.borderSize}px;
        }
        
        .countdown_annoucement_bar_wrapper_${e.id}.clickable {
          cursor: pointer;
        }
    
        .countdown_annoucement_bar_wrapper_${
          e.id
        } h2, #countdown_annoucement_bar_title_${e.id} {
            ${b(d)}font-weight: bold;
            font-size: ${d.titleSize}px;
            color: ${d.titleColor};
            margin: 0;
            padding: 0;
            line-height: 1.2;
            letter-spacing: normal;
            text-transform: none;
            text-align: left;
        }
    
        .countdown_annoucement_bar_subheading_${e.id} {
            ${b(d)}font-size: ${d.subheadingSize}px;
            color: ${d.subheadingColor};
            line-height: 1.2;
            letter-spacing: normal;
            padding: 0;
            margin: 0;
        }
        
        .countdown_annoucement_bar_cta_${e.id} {
          display: block;        
          cursor: pointer;
          text-decoration: none;
          background: ${d.buttonBackgroundColor};
          border: 0;
          white-space: nowrap;
          padding: 8px 16px;
          line-height: 1.5;
          border-radius: ${d.buttonBorderRadius}px;
          font-size: ${d.buttonFontSize}px;
          color: ${d.buttonFontColor};
        }

        .countdown_annoucement_bar_close_button_${e.id} {
          position: absolute;
          display: block;
          border: none;
          background: none;
          padding: 6px;
          cursor: pointer;
          top: 50%;
          right: 10px;
          transform: translate(0, -50%);
        }

        .countdown_annoucement_bar_close_button_${e.id} svg {
          width: 12px;
          height: 12px;
          display: block;
        }

        .countdown_annoucement_bar_close_button_${e.id}.top_right {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        @media (max-width: 430px) {
          .countdown_annoucement_bar_wrapper_${e.id} {
            justify-items: center;
            text-align: center;
            padding: 10px 15px;
          }

          .countdown_annoucement_bar_close_button_${e.id} {
            position: absolute;
            padding: 0;
            transform: none;
            top: 5px;
            right: 5px;
          }

          .countdown_annoucement_bar_wrapper_${
            e.id
          } h2, #countdown_annoucement_bar_title_${e.id} {
              text-align: center;
          }
        }

        ${c(e, 'top-bar')}
    `;
                    a(g);
                  })(d);
                let o = document.querySelector('.essential-countdown-top-bar');
                o ? o.append(e) : document.querySelector('body').prepend(e),
                  g(n, d);
              })(d);
          }),
          e.forEach((b) => {
            let c = b.getAttribute('countdown-timer-id'),
              a = d.find((a) => a.id === c);
            a && q(a, 'product-page') && j(a, b),
              a && r(a, 'landing-page') && k(a, b);
          }),
          0 === e.length && f && ((m && m.length > 0) || p))
        ) {
          let t, u;
          (u = p || m[m.length - 1]),
            (t = d.find((a) => q(a, 'product-page', !0))) && j(t, u);
        }
        if (0 === e.length && h && n) {
          let v,
            y = n;
          (v = d.find((a) => r(a, 'landing-page', !0))) && k(v, y, !1, !0);
        }
        if (0 === e.length && i && o) {
          let w,
            z = o;
          (w = d.find((a) => s(a, 'landing-page', !0))) && k(w, z);
        }
      });
  })();
})();
