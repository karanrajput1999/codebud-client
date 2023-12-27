import moment from "moment";

function formattedTime(time: string) {
  return moment(time).fromNow();
}

export default formattedTime;
