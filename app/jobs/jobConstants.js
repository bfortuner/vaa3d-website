'use strict';

vaad3dApp.constant('jobConstants', {
       'JOB_TYPES' : [
              'Neuron Tracing', 
              'Neuron Utilities'
       ],
       'JOB_TYPE_PLUGINS' : {
              'Neuron Tracing' : ['Vaa3D_Neuron2','Vaa3D-FarSight_snake_tracing'],
              'Neuron Utilities' : ['None Available']
       },
       'PLUGINS' : {
              'Vaa3D_Neuron2' : {
                     'settings' : { 
                            'flag' : '-p',
                            'order' : ['channel'],
                            'params': { 
                                   'channel' : {
                                          'values' : ['1','2','3'],
                                          'default' : '1'
                                   }
                            }
                     },
                     'method' : {
                            'values' : ['app1', 'app2'],
                            'default' : 'app2'
                     }
              },
              'Vaa3D-FarSight_snake_tracing' : {
                     'settings' : { 
                            'flag' : '-p',
                            'order' : ['channel'],
                            'params': { 
                                   'channel' : {
                                          'values' : ['1','2','3'],
                                          'default' : '1'
                                   }
                            }
                     },
                     'method' : {
                            'values' : ['snake_trace'],
                            'default' : 'snake_trace'
                     }                  
              }
       }
})