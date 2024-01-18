import moment from "moment";

function formattedTime(time: string | undefined) {
  return moment(time).fromNow();
}

export default formattedTime;
