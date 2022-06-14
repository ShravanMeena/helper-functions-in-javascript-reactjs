import moment from "moment";

export const urlify = (text) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + "</a>";
  });
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
};

export const isSpecialChar = (string) => {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (format?.test(string?.toString())) {
    return true;
  } else {
    return false;
  }
};

export const DateUtil = {
  humanizeTime: (date) => moment(date).fromNow(),

  formatShortDatetime: (datetime) => {
    if (!datetime) {
      return "NA";
    }
    return moment(datetime).format("MMM Do, h:mm:ss a");
  },
  formatDatetime: (datetime) => {
    if (!datetime) {
      return "NA";
    }
    return moment(datetime).format("MMMM Do YYYY, h:mm:ss a");
  },
  formatDate: (date) => {
    if (date) {
      return moment(date).format("MMM Do, YYYY");
    }
    return "NA";
  },
  formatMonth: (date) => {
    if (date) {
      return moment(date).format("MMM YYYY");
    }
    return "NA";
  },
};

export const LoginRedirectUser = (user) => {
  let APP_PREFIX_PATH = "www.mypath.com";
  let path;
  switch (user.role) {
    case "master_admin":
      path = `${APP_PREFIX_PATH}/admin`;
      break;
    case "master_ops":
      path = `${APP_PREFIX_PATH}/master-ops`;
      break;
    case "service_hub":
      path = `${APP_PREFIX_PATH}/service-hub`;
      break;
    default:
      path = `${APP_PREFIX_PATH}/500`;
  }
  if (window.location.pathname.indexOf(APP_PREFIX_PATH) >= 0) {
    path = window.location.pathname + window.location.search;
  }
  return path;
};
