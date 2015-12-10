export default function createDebuggerFor(router) {

    var events = ['pattern.add',
        'pattern.remove',
        'route.match',
        'route.not.match'];

    events.forEach(function(event) {
        router.on(event, function(payload) {
            console.debug(`event ${event} fired`);
            console.debug(payload);
        });
    });
}

