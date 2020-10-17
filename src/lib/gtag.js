export const GA_TRACKING_ID = 'UA-134643423-5'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  // eslint-disable-next-line no-undef
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  // eslint-disable-next-line no-undef
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
