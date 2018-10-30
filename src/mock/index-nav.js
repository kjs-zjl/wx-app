// index-nav
module.exports = [{
  index: 0,
  path: {
    path: '/recommend'
  },
  hint: {
    type: 'count', // count,dot
    count: 12
  },
  iconClass: 'icon-recommend',
  text: '推荐'
},
{
  index: 1,
  path: {
    path: '/channel'
  },

  hint: {
    type: 'count',
    count: 0
  },
  iconClass: 'icon-channel',
  text: '频道'
},
{
  index: 2,
  path: {
    path: '/seed'
  },
  hint: {
    type: 'dot',
    count: 99
  },
  iconClass: 'icon-seed',
  text: '种子'
},
{
  index: 3,
  path: {
    path: '/live'
  },
  hint: {
    type: null,
    count: ''
  },
  iconClass: 'icon-live',
  text: '直播'
},
{
  index: 4,
  path: {
    path: '/person'
  },
  hint: {
    type: null,
    count: ''
  },
  iconClass: 'icon-person',
  text: '个人'
}
]
