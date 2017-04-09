export const basicInfo = [
	{label:"别名", value:"采集1", icon:"desktop"},
	{label:"主机名", value:"gather-5", icon:"desktop"},
	{label:"IP地址", value:"192.168.1.1", icon:"desktop"},
	{label:"操作系统", value:"rhel x86_64", icon:"desktop"},
	{label:"处理器", value:"4*8 Core", icon:"desktop"},
	{label:"物理内存", value:"128G", icon:"desktop"},
	{label:"磁盘容量", value:"500G", icon:"desktop"},
	{label:"运行时间", value:"4天3小时", icon:"desktop"}
]

export const cpuRtInfo = {
	"%user":30,
	"%sys":12,
	"%iowait":0,
	"%usage":55,
	"%steal":5
}

export var cpu_x = ['']
export var cpu_data = []
var cpu_date = 12;
var cpu_time = 0;
var cpu_max = 100;
var cpu_min = 10;
for (let i=0; i<48; i++) {
    if (cpu_time == 55) {
        cpu_time = 0;
        cpu_date += 1;
    } else {
        cpu_time +=5;
    }

    if (cpu_time < 10)
        var strtime = '0' + cpu_time;


    if (i==47)
    	cpu_x.push("")
    else 
    	cpu_x.push(cpu_date +":" + strtime);
    cpu_data.push(parseInt((Math.random()*(cpu_max-cpu_min+1)+cpu_min)+'',10));
}

export const memRtInfo = {
	gbbuffers:3.2,
	gbcached:55,
	"%swpused":0,
	usage:32,
	gbswpcad:2
}

export var mem_x = ['']
export var mem_data = []
var mem_date = 12;
var mem_time = 0;
var mem_max = 100;
var mem_min = 10;
for (let i=0; i<48; i++) {
    if (mem_time == 55) {
        mem_time = 0;
        mem_date += 1;
    } else {
        mem_time +=5;
    }

    if (mem_time < 10)
        var strtime = '0' + mem_time;


    if (i==47)
    	mem_x.push("")
    else 
    	mem_x.push(mem_date +":" + strtime);
    mem_data.push(parseInt((Math.random()*(mem_max-mem_min+1)+mem_min)+'',10));
}

export const diskUsage = [
	{filesystem:"/export", usage:55},
	{filesystem:"/", usage:12},
	{filesystem:"/tmp", usage:60},
	{filesystem:"/test", usage:5}
]

export const diskIO = {
	tps:20.1,
	rtps:143.4,
	wtps:55.4,
	"bread/s":32.2,
	"bwrtn/s":687.8
}

export var io_x = ['']
export var io_data = []
var date = 12;
var time = 0;
var max = 100;
var min = 10;
for (let i=0; i<48; i++) {
    if (time == 55) {
        time = 0;
        date += 1;
    } else {
        time +=5;
    }

    if (time < 10)
        var strtime = '0' + time;
    if (i==47)
    	io_x.push("")
    else
    	io_x.push(date +":" + strtime);
    io_data.push(parseInt((Math.random()*(max-min+1)+min)+'',10));
}


var niox = []
var rxeth0_data = []
var txeth0_data = []
var rxeth1_data = []
var txeth1_data = []
var nio_date = 0;
var nio_time = 0;
var nio_max = 100;
var nio_min = 10;
for (let i=0; i<144; i++) {
    if (nio_time == 55) {
        nio_time = 0;
        nio_date += 1;
    } else {
        nio_time +=5;
    }

    if (nio_time < 10)
        var strtime = '0' + nio_time;

    niox.push(nio_date +":" + strtime);
    rxeth0_data.push(parseInt((Math.random()*(6000-0+1)+0)+'',10));
    txeth0_data.push(parseInt((Math.random()*(1000-0+1)+0)+'',10));
    rxeth1_data.push(parseInt((Math.random()*(3000-0+1)+0)+'',10));
    txeth1_data.push(parseInt((Math.random()*(3000-0+1)+0)+'',10));
}

export const networkIOData = {
	datetime:niox,
	"eth0接收":rxeth0_data,
	"eth0发送":txeth0_data,
	"eth1接收":rxeth1_data,
	"eth1发送":txeth1_data
}

export const processInfo = [
	{name:"FluxManager", cpu:35, mem:16, rss:13, vsz:45, iord:123.4, iowr:74.5},
	{name:"Tomcat(Java)", cpu:12, mem:43, rss:22, vsz:23.3, iord:12.4, iowr:12.5},
	{name:"MasterControl", cpu:35, mem:16, rss:13, vsz:45, iord:123.4, iowr:74.5},
	{name:"ActiveMQ", cpu:35, mem:16, rss:13, vsz:45, iord:123.4, iowr:74.5},
]

export const treeData = [
	{
		id:"1",
		name:"集中监控", 
		type:"folder",
		url:"#",
		itemList:[
			{
				id:"11", 
				name:"基础设施", 
				type:"folder",
				url:"#",
				itemList:[
					{id:"111", name:"采集机-1", type:"file", url:"#"},
					{id:"112", name:"采集机-2", type:"file", url:"#"}
				]
			},

			{
				id:"12", 
				name:"业务应用", 
				type:"folder",
				url:"#",
				itemList:[
					{id:"121", name:"应用服务器-1", type:"file", url:"#"},
					{id:"122", name:"应用服务器-2", type:"file", url:"#"}
				]
			}
		]
	},

	{
		id:"2",
		name:"IP网管", 
		type:"folder",
		url:"#",
		itemList:[
			{
				id:"21", 
				name:"基础设施", 
				type:"folder",
				url:"#",
				itemList:[
					{id:"211", name:"采集机-1", type:"file", url:"#"},
					{id:"212", name:"采集机-2", type:"file", url:"#"}
				]
			},

			{
				id:"22", 
				name:"业务应用", 
				type:"folder",
				url:"#",
				itemList:[
					{id:"221", name:"应用服务器-1", type:"file", url:"#"},
					{id:"222", name:"应用服务器-2", type:"file", url:"#"},
				]
			}
		]
	}
]