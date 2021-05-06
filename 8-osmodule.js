const os = require('os')

//info about the current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in second

console.log(`system uptime ${os.uptime} seconds`)

const osinfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(osinfo)