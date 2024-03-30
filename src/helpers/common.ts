import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import { toastError, toastSuccess } from './toastHelper';
dayjs.extend(relativeTime);

export function getFormatedDate(date: Date | string){
  if(!date ) return ''
  return dayjs(new Date(date)).format('DD/MM/YYYY');
}

export function getFormatedDateByText(date: Date | string | undefined){
  if(!date ) return ''
  // return dayjs(new Date(date)).format('DD MMM YY');
  return dayjs(new Date(date)).format('DD/MM/YYYY');
}

export function getFormatedDateWithTime(date: Date | string){
  if(!date ) return ''
  return dayjs(new Date(date)).format('DD/MM/YYYY hh:mm A');
}

export function getSystemFormatedDate(date: Date | string){
  if(!date ) return ''
  return dayjs(new Date(date)).format('YYYY-MM-DD');
}

export function getDateFromNow(date: Date | string){
  if(!date) return '';
  return dayjs(new Date(date)).fromNow()
}

export function textCapitalize(text: string){
  if(!text) return '';
  let firstChar = text?.charAt(0)?.toUpperCase();
  if(!!text && text?.length === 1) return firstChar
  return firstChar + text?.slice(1);
}

export function exportContentInfo(userInfo: any, name = 'chat-history') {
  const fileData: any = typeof userInfo != 'string' ? JSON.stringify(userInfo) : userInfo;
  const blob: any = new Blob([fileData], { type: "text/plain" });
  const url: any = URL.createObjectURL(blob);
  const link: any = document.createElement("a");
  link.download = `${name}.txt`;
  link.href = url;
  link?.click();
}

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export function getTitleForSlug(text: string){
  if(!text) return '';
  let firstChar = text?.replaceAll("-", " ")
  return textCapitalize(firstChar);
}

export function uniqueByKeepList(data: any[], key: any) {
  return [...new Map(data?.map(x => [key(x), x])).values()];
}

export function checkCurrentPath(routeStr: string) {
  const pathname = window.location.pathname;
  return pathname?.includes(routeStr);
}

export function isObjectBlank(object: Object) {
  return Object.keys(object).length === 0;
}

export function getFirstWordName(name = "H P") {
  let shortName = "";
  const nameArr = name ? name.split(" ") : ""
  const nameArrLength = nameArr?.length || 0;
  if(nameArrLength === 1) shortName = nameArr[0]?.charAt(0);
  if(nameArrLength > 1) shortName = `${nameArr[0]?.charAt(0)}${nameArr[1]?.charAt(0) || ""}`;
  return shortName;
}

export function downloadFile({ data = [], fileName = 'clients.csv', fileType = 'text/csv' }: any) {
  try{
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
    toastSuccess("Client exported successfully!");
  } catch {
    toastError();
  }
}