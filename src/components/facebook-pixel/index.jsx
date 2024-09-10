import React from "react";

const FacebookPixel = () => {
  React.useEffect(() => {
    // Facebook Pixel Code
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "777965410707252");
    fbq("track", "PageView");
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-THGPKWVS");
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(95573183, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, []); 

  return (
    <>
      {/* Meta Pixel Code */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={
            "https://www.facebook.com/tr?id=777965410707252&ev=PageView&noscript=1"
          }
        />
      </noscript>
      <noscript>
        <div>
          <img
            src={"https://mc.yandex.ru/watch/95573183"}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default FacebookPixel;
