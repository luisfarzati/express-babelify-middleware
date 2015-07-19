import moment from 'moment'
console.log('last week from now', moment(Date.now()-1000*60*60*24*7).fromNow())
