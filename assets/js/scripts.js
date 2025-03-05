(function (window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

  var $primary = '#23B9DC';
  var $secondary= '#7C8089';
  var $success= '#0DCA99';
  var $warning= '#F6BF4F';
  var $danger= '#F05F78';

  var $strokeColor = '#ebe9f1';
  var $textHeadingColor = '#ebe9f1';
  var $textHeadingColor2 = '#5e5873';

  var $g_bg_s= '#3E4A6B';
  var $g_bg_e= '#19233D';

  var $g_violet_s= '#927DE3';
  var $g_violet_e= '#D34D91';

  var $g_blue_s= '#7591FF';
  var $g_blue_e= '#5DD9F8';

  var $g_green_s= '#37BECC';
  var  $g_green_e= '#A2D800';

  var $g_orange_s= '#F6789D';
  var $g_orange_e= '#EDB65F';

  var $g_purple_s= '#8179D3';
  var $g_purple_e= '#4463C6';


  // RDS ---------------------------------------------------
  var $rds_cpu_avg_stroke_color = '#51e5a8';
  var $rds_cpu_avg_chart = document.querySelector('#rds_cpu_avg_chart');
  var rds_cpu_avg_option;
  var rds_cpu_avg_chart;

  var $rds_cpu_max_stroke_color = '#51e5a8';
  var $rds_cpu_max_chart = document.querySelector('#rds_cpu_max_chart');
  var rds_cpu_max_option;
  var rds_cpu_max_chart;


  var $rds_ram_stroke_color1 = '#28c76f33';
  var $rds_ram_stroke_color2 = '#28c76f66';
  var $rds_ram_chart = document.querySelector('#rds_ram_chart');
  var rds_ram_option;
  var rds_ram_chart;

  var $rds_hdd_stroke_color2 = '#ebf0f7';
  var $rds_hdd_chart = document.querySelector('#rds_hdd_chart');
  var rds_hdd_chart_option;
  var rds_hdd_chart;

  var $rds_connection_stroke_color2 = '#ebf0f7';
  var $rds_connection_chart = document.querySelector('#rds_connection_chart');
  var rds_connection_chart_option;
  var rds_connection_chart;
// RDS ------------------------------------------------------------------

  // ECS ----------------------------------------------------------------------
  var $ecs_cpu_avg_stroke_color = '#51e5a8';
  var $ecs_cpu_avg_chart = document.querySelector('#ecs_cpu_avg_chart');
  var ecs_cpu_avg_option;
  var ecs_cpu_avg_chart;

  var $ecs_cpu_max_stroke_color = '#51e5a8';
  var $ecs_cpu_max_chart = document.querySelector('#ecs_cpu_max_chart');
  var ecs_cpu_max_option;
  var ecs_cpu_max_chart;


  var $ecs_ram_stroke_color1 = '#28c76f33';
  var $ecs_ram_stroke_color2 = '#28c76f66';
  var $ecs_ram_chart = document.querySelector('#ecs_ram_chart');
  var ecs_ram_option;
  var ecs_ram_chart;
  // ECS ----------------------------------------------------------------------


  // On load Toast
  setTimeout(function () {
    toastr['success'](
        'sigrrow Station에 로그인 하셨습니다.',
        'Yslave station',
        {
          closeButton: true,
          tapToDismiss: false
        }
    );
  }, 2000);


//------------ RDS CPU AVG Chart ------------
  rds_cpu_avg_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$g_blue_e],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $g_blue_e,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [$g_blue_s],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [90],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  rds_cpu_avg_chart = new ApexCharts($rds_cpu_avg_chart, rds_cpu_avg_option);
  rds_cpu_avg_chart.render();

//------------ RDS CPU MAX Chart ------------
  rds_cpu_max_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$g_blue_e],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $g_blue_e,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [$g_blue_s],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [25],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  rds_cpu_max_chart = new ApexCharts($rds_cpu_max_chart, rds_cpu_max_option);
  rds_cpu_max_chart.render();

//--------------- RDS Freeable Memeory Chart ---------------
  rds_ram_option = {
    chart: {
      type: 'pie',
      height: 160,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [40, 60],
    legend: { show: false },
    comparedResult: [2, -3],
    labels: ['Free', 'Used'],
    stroke: { width: 0 },
    colors: [$rds_ram_stroke_color1, window.colors.solid.success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'Free',
              formatter: function (w) {
                return '40%';
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1045,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  };
  rds_ram_chart = new ApexCharts($rds_ram_chart, rds_ram_option);
  rds_ram_chart.render();

//--------------- RDS Free Storage Chart ---------------
  rds_hdd_chart_option = {
    title: {
      text: '18356.68MB',
      align: 'left',
      margin: 0,
      offsetX: 0,
      offsetY: 0,
      floating: true,
      style: {
        fontSize:  '21px',
        fontWeight:  'bold',
        fontFamily:  'Montserrat',
        color:  $textHeadingColor
      },
    },
    chart: {
      type: 'bar',
      height: 200,
      sparkline: { enabled: true },
      toolbar: { show: false }
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    colors: [
      $rds_hdd_stroke_color2,
      $rds_hdd_stroke_color2,
      $rds_hdd_stroke_color2,
      $warning,
      $rds_hdd_stroke_color2,
      $rds_hdd_stroke_color2
    ],
    series: [
      {
        name: 'Sessions',
        data: [75, 125, 175, 225, 125, 75, 25]
      }
    ],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded'
      }
    },
    tooltip: {
      x: { show: false }
    },
    xaxis: {
      type: 'numeric'
    }
  };
  rds_hdd_chart = new ApexCharts($rds_hdd_chart, rds_hdd_chart_option);
  rds_hdd_chart.render();

//--------------- RDS DB Connection Chart ---------------
  rds_connection_chart_option = {
    title: {
      text: '130.2K',
      align: 'left',
      margin: 0,
      offsetX: 0,
      offsetY: 0,
      floating: true,
      style: {
        fontSize:  '21px',
        fontWeight:  'bold',
        fontFamily:  'Montserrat',
        color:  $textHeadingColor
      },
    },

    chart: {
      type: 'bar',
      height: 200,
      sparkline: { enabled: true },
      toolbar: { show: false }
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    colors: [
      $secondary,
      $secondary,
      $secondary,
      $rds_connection_stroke_color2,
      $rds_connection_stroke_color2,
      $rds_connection_stroke_color2,
      $danger
    ],
    series: [
      {
        name: 'Sessions',
        data: [25, 50, 75, 100, 125, 150, 200]
      }
    ],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded'
      }
    },
    tooltip: {
      x: { show: false }
    },
    xaxis: {
      type: 'numeric'
    }
  };
  rds_connection_chart = new ApexCharts($rds_connection_chart, rds_connection_chart_option);
  rds_connection_chart.render();


  // ECS

  //------------ ECS CPU AVG Chart ------------
  ecs_cpu_avg_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$ecs_cpu_avg_stroke_color],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $strokeColor,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [window.colors.solid.success],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [83],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  ecs_cpu_avg_chart = new ApexCharts($ecs_cpu_avg_chart, ecs_cpu_avg_option);
  ecs_cpu_avg_chart.render();

//------------ ECS CPU MAX Chart ------------
  ecs_cpu_max_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$ecs_cpu_max_stroke_color],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $strokeColor,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [window.colors.solid.success],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [25],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  ecs_cpu_max_chart = new ApexCharts($ecs_cpu_max_chart, ecs_cpu_max_option);
  ecs_cpu_max_chart.render();

//--------------- ECS Freeable Memeory Chart ---------------
  ecs_ram_option = {
    chart: {
      type: 'pie',
      height: 160,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [40, 60],
    legend: { show: false },
    comparedResult: [2, -3],
    labels: ['Free', 'Used'],
    stroke: { width: 0 },
    colors: [$ecs_ram_stroke_color1, window.colors.solid.success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'Free',
              formatter: function (w) {
                return '40%';
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1045,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  };
  ecs_ram_chart = new ApexCharts($ecs_ram_chart, ecs_ram_option);
  ecs_ram_chart.render();


  // EC2 ---------------------------------------------------
  var $ec2_cpu_avg_stroke_color = $g_violet_e;
  var $ec2_cpu_avg_chart = document.querySelector('#ec2_cpu_avg_chart');
  var ec2_cpu_avg_option;
  var ec2_cpu_avg_chart;

  var $ec2_cpu_max_stroke_color = $g_violet_e;
  var $ec2_cpu_max_chart = document.querySelector('#ec2_cpu_max_chart');
  var ec2_cpu_max_option;
  var ec2_cpu_max_chart;

  //------------ ECS CPU AVG Chart ------------
  ec2_cpu_avg_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$g_violet_e],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $g_violet_e,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [$g_violet_s],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [83],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  ec2_cpu_avg_chart = new ApexCharts($ec2_cpu_avg_chart, ec2_cpu_avg_option);
  ec2_cpu_avg_chart.render();

//------------ EC2 CPU MAX Chart ------------
  ec2_cpu_max_option = {
    chart: {
      height: 200,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [$g_violet_e],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: $g_violet_s,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: $textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [$g_violet_s],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [25],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };
  ec2_cpu_max_chart = new ApexCharts($ec2_cpu_max_chart, ec2_cpu_max_option);
  ec2_cpu_max_chart.render();

})(window);


