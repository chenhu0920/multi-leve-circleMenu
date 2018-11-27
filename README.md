# multi-leve-circleMenu
多级环形菜单,(可适用于vue)                   
配置new Menu对象中的属性可设置:                                                                                                   
1.一级环形菜单(n级环形菜单)的半径r                                                                                                 
2.一级环形菜单(n级环形菜单)相对圆心点的角度a，                                                                                       
3.菜单内容data                                                                                                                   
简单的配置如下： 
```js
new Menu({                                                                                                                     
      container: document.querySelector('#container'),                                                    
      data: [{ 
        level1Content: '需求管理',
        childMenu: [
          {
            level2Content: 'Jira',
            level2Url: 'project-management'
          }]
      },
      {
        level1Content: '代码开发',
        childMenu: [
          {
            level2Content: 'git',
            level2Url: 'https://git.yidian-inc.com:8021/'
          },
          {
            level2Content: 'Gerrit',
            level2Url: 'http://gerrit.yidian-inc.com'
          },
          {
            level2Content: 'sonar',
            level2Url: 'http://qamock.yidian-inc.com:9000/about'
          }]
      },
      {
        level1Content: '监控分析',
        childMenu: [
          {
            level2Content: '线上部署分析',
            level2Url: 'project-management'
          },
          {
            level2Content: '各模块docker运行状态',
            level2Url: 'project-management'
          }]
      }]
    })
```
### 效果图：
![image](https://github.com/chenhu0920/multi-leve-circleMenu/blob/master/D98BCB8A-4CA2-4A4B-AFF5-BFA3B3DBF386.png)
