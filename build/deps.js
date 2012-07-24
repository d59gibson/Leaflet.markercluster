var deps = {
	
	Defaults: {
		src: ['MarkerCluster.Default.js'],
		deps: ['QuickHull', 'Spiderfier'],
		desc: 'Provides sensible defaults for the Cluster.'
	},
	Core: {
		src: ['MarkerClusterGroup.js',
		      'MarkerCluster.js'],
		desc: 'The core of the library.'
	},

	QuickHull: {
		src: ['MarkerCluster.QuickHull.js'],
		desc: 'ConvexHull generation. Used to show the area outline of the markers within a cluster.',
		heading: 'QuickHull'
	},

	Spiderfier: {
		src: ['MarkerCluster.Spiderfier.js'],
		desc: 'Provides the ability to show all of the child markers of a cluster.',
		heading: 'Spiderfier'
	}
};

if (typeof exports !== 'undefined') {
	exports.deps = deps;
}
