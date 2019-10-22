# const dns = require ('dns');

* dns.setServers();
* dns.getServers();
* dns.lookup();  // lookup( 'www.x.com' , ( error, addressess, family ) => {} );
* dns.lookupService();
* dns.resolve();
* dns.resolve4();  // resolve4( 'www.x.com' , ( error, addressess ) => {} );
* dns.resolve6();  // lookupService( 'ip' , port, ( error, hostnames, services ) => {} );
* dns.resolveAny();
* dns.resolveCname();
* dns.resolveMx();
* dns.resolveNaptr();
* dns.resolveNs();
* dns.resolvePtr();
* dns.resolveSoa();
* dns.resolveSrv();
* dns.resolveTxt();
* dns.reverse();  // dns.reverse( addresss, ( error, hostnames ) => {} );


