import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Feeds } from '@/types/feeds.types'

export const useAsteroidStore = defineStore('asteroid', () => {
  const startDate = ref('')
  const endDate = ref('')
  const dateRange = ref('')

  
  const fastestAsteroidId =ref("")
  const highestSpeed = ref(0)

  const shortestDistance = ref(Infinity)
  const closestAsteroidId = ref("")

  const totalDiameter = ref(0)
  const asteroidCount = ref(0)

  const avarageSize = ref(0)
  const feeds = ref<Feeds>({
    links: {
      next: 'http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-17&end_date=2024-09-24&detailed=false&api_key=DEMO_KEY',
      previous:
        'http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-03&end_date=2024-09-10&detailed=false&api_key=DEMO_KEY',
      self: 'http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-10&end_date=2024-09-17&detailed=false&api_key=DEMO_KEY'
    },
    element_count: 150,
    near_earth_objects: {
      '2024-09-10': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3304382?api_key=DEMO_KEY'
          },
          id: '3304382',
          neo_reference_id: '3304382',
          name: '(2005 WR2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3304382',
          absolute_magnitude_h: 19.52,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3315545381,
              estimated_diameter_max: 0.7413784854
            },
            meters: {
              estimated_diameter_min: 331.5545380858,
              estimated_diameter_max: 741.3784854083
            },
            miles: {
              estimated_diameter_min: 0.2060183749,
              estimated_diameter_max: 0.4606710909
            },
            feet: {
              estimated_diameter_min: 1087.7773907333,
              estimated_diameter_max: 2432.3441900671
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 11:45',
              epoch_date_close_approach: 1725968700000,
              relative_velocity: {
                kilometers_per_second: '14.6351290871',
                kilometers_per_hour: '52686.4647136903',
                miles_per_hour: '32737.320255015'
              },
              miss_distance: {
                astronomical: '0.3201471511',
                lunar: '124.5372417779',
                kilometers: '47893331.891128157',
                miles: '29759536.4691042866'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3426807?api_key=DEMO_KEY'
          },
          id: '3426807',
          neo_reference_id: '3426807',
          name: '(2008 RQ24)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3426807',
          absolute_magnitude_h: 20.8,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1838886721,
              estimated_diameter_max: 0.411187571
            },
            meters: {
              estimated_diameter_min: 183.8886720703,
              estimated_diameter_max: 411.1875710413
            },
            miles: {
              estimated_diameter_min: 0.1142630881,
              estimated_diameter_max: 0.2555000322
            },
            feet: {
              estimated_diameter_min: 603.309310875,
              estimated_diameter_max: 1349.040630575
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 22:34',
              epoch_date_close_approach: 1726007640000,
              relative_velocity: {
                kilometers_per_second: '3.6232299982',
                kilometers_per_hour: '13043.6279936151',
                miles_per_hour: '8104.8031830327'
              },
              miss_distance: {
                astronomical: '0.2467385224',
                lunar: '95.9812852136',
                kilometers: '36911557.397987288',
                miles: '22935778.2209410544'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3616348?api_key=DEMO_KEY'
          },
          id: '3616348',
          neo_reference_id: '3616348',
          name: '(2012 VH5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3616348',
          absolute_magnitude_h: 22.49,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0844413128,
              estimated_diameter_max: 0.1888165155
            },
            meters: {
              estimated_diameter_min: 84.4413127979,
              estimated_diameter_max: 188.8165155254
            },
            miles: {
              estimated_diameter_min: 0.052469383,
              estimated_diameter_max: 0.1173251071
            },
            feet: {
              estimated_diameter_min: 277.0384366798,
              estimated_diameter_max: 619.4767767962
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 16:30',
              epoch_date_close_approach: 1725985800000,
              relative_velocity: {
                kilometers_per_second: '7.8735077501',
                kilometers_per_hour: '28344.6279002435',
                miles_per_hour: '17612.2494861263'
              },
              miss_distance: {
                astronomical: '0.3124953362',
                lunar: '121.5606857818',
                kilometers: '46748636.680453894',
                miles: '29048255.8477119772'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3648844?api_key=DEMO_KEY'
          },
          id: '3648844',
          neo_reference_id: '3648844',
          name: '(2013 TR4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3648844',
          absolute_magnitude_h: 23.24,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0597798714,
              estimated_diameter_max: 0.1336718562
            },
            meters: {
              estimated_diameter_min: 59.7798714231,
              estimated_diameter_max: 133.6718561883
            },
            miles: {
              estimated_diameter_min: 0.0371454785,
              estimated_diameter_max: 0.083059815
            },
            feet: {
              estimated_diameter_min: 196.1281933598,
              estimated_diameter_max: 438.5559726568
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 00:30',
              epoch_date_close_approach: 1725928200000,
              relative_velocity: {
                kilometers_per_second: '9.1901151332',
                kilometers_per_hour: '33084.4144796243',
                miles_per_hour: '20557.3685415199'
              },
              miss_distance: {
                astronomical: '0.2288848305',
                lunar: '89.0361990645',
                kilometers: '34240683.118111035',
                miles: '21276173.900300883'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3826885?api_key=DEMO_KEY'
          },
          id: '3826885',
          neo_reference_id: '3826885',
          name: '(2018 QR)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3826885',
          absolute_magnitude_h: 24.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0305179233,
              estimated_diameter_max: 0.0682401509
            },
            meters: {
              estimated_diameter_min: 30.5179232594,
              estimated_diameter_max: 68.2401509401
            },
            miles: {
              estimated_diameter_min: 0.0189629525,
              estimated_diameter_max: 0.0424024508
            },
            feet: {
              estimated_diameter_min: 100.1244233463,
              estimated_diameter_max: 223.8850168104
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 18:37',
              epoch_date_close_approach: 1725993420000,
              relative_velocity: {
                kilometers_per_second: '10.7313597',
                kilometers_per_hour: '38632.8949200436',
                miles_per_hour: '24004.9785129571'
              },
              miss_distance: {
                astronomical: '0.2945986168',
                lunar: '114.5988619352',
                kilometers: '44071325.578226216',
                miles: '27384651.8711291408'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54016590?api_key=DEMO_KEY'
          },
          id: '54016590',
          neo_reference_id: '54016590',
          name: '(2020 HP1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54016590',
          absolute_magnitude_h: 28.6,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0050647146,
              estimated_diameter_max: 0.0113250461
            },
            meters: {
              estimated_diameter_min: 5.0647145883,
              estimated_diameter_max: 11.3250461062
            },
            miles: {
              estimated_diameter_min: 0.0031470668,
              estimated_diameter_max: 0.0070370552
            },
            feet: {
              estimated_diameter_min: 16.61651821,
              estimated_diameter_max: 37.155664267
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 00:26',
              epoch_date_close_approach: 1725927960000,
              relative_velocity: {
                kilometers_per_second: '9.7341157063',
                kilometers_per_hour: '35042.8165427157',
                miles_per_hour: '21774.2434234446'
              },
              miss_distance: {
                astronomical: '0.2072319934',
                lunar: '80.6132454326',
                kilometers: '31001464.808494058',
                miles: '19263416.9754836804'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54053850?api_key=DEMO_KEY'
          },
          id: '54053850',
          neo_reference_id: '54053850',
          name: '(2020 PM7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54053850',
          absolute_magnitude_h: 22.31,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0917392059,
              estimated_diameter_max: 0.2051351006
            },
            meters: {
              estimated_diameter_min: 91.7392059155,
              estimated_diameter_max: 205.1351006288
            },
            miles: {
              estimated_diameter_min: 0.0570040821,
              estimated_diameter_max: 0.1274650026
            },
            feet: {
              estimated_diameter_min: 300.9816563357,
              estimated_diameter_max: 673.0154435471
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 00:16',
              epoch_date_close_approach: 1725927360000,
              relative_velocity: {
                kilometers_per_second: '10.3710088411',
                kilometers_per_hour: '37335.6318280464',
                miles_per_hour: '23198.9096767103'
              },
              miss_distance: {
                astronomical: '0.0762722927',
                lunar: '29.6699218603',
                kilometers: '11410172.527936549',
                miles: '7089952.4433964162'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54194978?api_key=DEMO_KEY'
          },
          id: '54194978',
          neo_reference_id: '54194978',
          name: '(2021 RU7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54194978',
          absolute_magnitude_h: 23.47,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0537718498,
              estimated_diameter_max: 0.1202375114
            },
            meters: {
              estimated_diameter_min: 53.7718497693,
              estimated_diameter_max: 120.23751136
            },
            miles: {
              estimated_diameter_min: 0.0334122681,
              estimated_diameter_max: 0.0747121027
            },
            feet: {
              estimated_diameter_min: 176.416835597,
              estimated_diameter_max: 394.4800367703
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 20:52',
              epoch_date_close_approach: 1726001520000,
              relative_velocity: {
                kilometers_per_second: '11.658214134',
                kilometers_per_hour: '41969.5708822506',
                miles_per_hour: '26078.2591962518'
              },
              miss_distance: {
                astronomical: '0.2540391989',
                lunar: '98.8212483721',
                kilometers: '38003723.051946343',
                miles: '23614418.4893438134'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54239834?api_key=DEMO_KEY'
          },
          id: '54239834',
          neo_reference_id: '54239834',
          name: '(2022 BA1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54239834',
          absolute_magnitude_h: 22.58,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0810130488,
              estimated_diameter_max: 0.1811506842
            },
            meters: {
              estimated_diameter_min: 81.0130488243,
              estimated_diameter_max: 181.1506842357
            },
            miles: {
              estimated_diameter_min: 0.0503391592,
              estimated_diameter_max: 0.1125617818
            },
            feet: {
              estimated_diameter_min: 265.7908511048,
              estimated_diameter_max: 594.3264108678
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 13:13',
              epoch_date_close_approach: 1725973980000,
              relative_velocity: {
                kilometers_per_second: '24.9481370409',
                kilometers_per_hour: '89813.293347231',
                miles_per_hour: '55806.4877467836'
              },
              miss_distance: {
                astronomical: '0.3591632805',
                lunar: '139.7145161145',
                kilometers: '53730061.745012535',
                miles: '33386312.224481583'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54293318?api_key=DEMO_KEY'
          },
          id: '54293318',
          neo_reference_id: '54293318',
          name: '(2020 CO8)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54293318',
          absolute_magnitude_h: 28,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0066765941,
              estimated_diameter_max: 0.0149293183
            },
            meters: {
              estimated_diameter_min: 6.676594135,
              estimated_diameter_max: 14.9293183439
            },
            miles: {
              estimated_diameter_min: 0.004148642,
              estimated_diameter_max: 0.0092766455
            },
            feet: {
              estimated_diameter_min: 21.9048371017,
              estimated_diameter_max: 48.9807047955
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 19:39',
              epoch_date_close_approach: 1725997140000,
              relative_velocity: {
                kilometers_per_second: '9.0363532405',
                kilometers_per_hour: '32530.8716658842',
                miles_per_hour: '20213.4185637268'
              },
              miss_distance: {
                astronomical: '0.1064886516',
                lunar: '41.4240854724',
                kilometers: '15930475.458532092',
                miles: '9898738.4393311896'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54358767?api_key=DEMO_KEY'
          },
          id: '54358767',
          neo_reference_id: '54358767',
          name: '(2023 JA4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54358767',
          absolute_magnitude_h: 23.2,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0608912622,
              estimated_diameter_max: 0.1361570015
            },
            meters: {
              estimated_diameter_min: 60.8912622106,
              estimated_diameter_max: 136.1570015386
            },
            miles: {
              estimated_diameter_min: 0.0378360645,
              estimated_diameter_max: 0.0846040122
            },
            feet: {
              estimated_diameter_min: 199.7744887109,
              estimated_diameter_max: 446.7093369279
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 00:47',
              epoch_date_close_approach: 1725929220000,
              relative_velocity: {
                kilometers_per_second: '19.6751651559',
                kilometers_per_hour: '70830.5945611698',
                miles_per_hour: '44011.3769371891'
              },
              miss_distance: {
                astronomical: '0.4669829344',
                lunar: '181.6563614816',
                kilometers: '69859652.312589728',
                miles: '43408775.0553971264'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2662203?api_key=DEMO_KEY'
          },
          id: '2662203',
          neo_reference_id: '2662203',
          name: '662203 (2005 WR2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2662203',
          absolute_magnitude_h: 19.48,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3377185972,
              estimated_diameter_max: 0.7551617405
            },
            meters: {
              estimated_diameter_min: 337.7185971644,
              estimated_diameter_max: 755.1617405255
            },
            miles: {
              estimated_diameter_min: 0.2098485424,
              estimated_diameter_max: 0.4692356059
            },
            feet: {
              estimated_diameter_min: 1108.0006823209,
              estimated_diameter_max: 2477.5648447858
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 11:45',
              epoch_date_close_approach: 1725968700000,
              relative_velocity: {
                kilometers_per_second: '14.6351306674',
                kilometers_per_hour: '52686.4704025748',
                miles_per_hour: '32737.3237898666'
              },
              miss_distance: {
                astronomical: '0.320147172',
                lunar: '124.537249908',
                kilometers: '47893335.01772364',
                miles: '29759538.411880632'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54440648?api_key=DEMO_KEY'
          },
          id: '54440648',
          neo_reference_id: '54440648',
          name: '(2024 JB6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54440648',
          absolute_magnitude_h: 19.95,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2719912773,
              estimated_diameter_max: 0.6081909854
            },
            meters: {
              estimated_diameter_min: 271.9912773482,
              estimated_diameter_max: 608.1909854376
            },
            miles: {
              estimated_diameter_min: 0.169007492,
              estimated_diameter_max: 0.3779122408
            },
            feet: {
              estimated_diameter_min: 892.3598623751,
              estimated_diameter_max: 1995.3773126632
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 05:17',
              epoch_date_close_approach: 1725945420000,
              relative_velocity: {
                kilometers_per_second: '18.9822397677',
                kilometers_per_hour: '68336.0631636761',
                miles_per_hour: '42461.3721363408'
              },
              miss_distance: {
                astronomical: '0.3625428936',
                lunar: '141.0291856104',
                kilometers: '54235644.666196632',
                miles: '33700466.8841602416'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54466216?api_key=DEMO_KEY'
          },
          id: '54466216',
          neo_reference_id: '54466216',
          name: '(2024 PZ5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54466216',
          absolute_magnitude_h: 23.357,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0566441386,
              estimated_diameter_max: 0.1266601444
            },
            meters: {
              estimated_diameter_min: 56.6441385787,
              estimated_diameter_max: 126.6601443889
            },
            miles: {
              estimated_diameter_min: 0.035197025,
              estimated_diameter_max: 0.0787029406
            },
            feet: {
              estimated_diameter_min: 185.8403556146,
              estimated_diameter_max: 415.5516681169
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 06:47',
              epoch_date_close_approach: 1725950820000,
              relative_velocity: {
                kilometers_per_second: '11.1375858736',
                kilometers_per_hour: '40095.3091449132',
                miles_per_hour: '24913.6658406268'
              },
              miss_distance: {
                astronomical: '0.0882165124',
                lunar: '34.3162233236',
                kilometers: '13197002.353868588',
                miles: '8200237.0126509944'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467607?api_key=DEMO_KEY'
          },
          id: '54467607',
          neo_reference_id: '54467607',
          name: '(2024 RH)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467607',
          absolute_magnitude_h: 25.605,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0201166183,
              estimated_diameter_max: 0.0449821261
            },
            meters: {
              estimated_diameter_min: 20.1166183497,
              estimated_diameter_max: 44.9821261073
            },
            miles: {
              estimated_diameter_min: 0.0124998833,
              estimated_diameter_max: 0.0279505887
            },
            feet: {
              estimated_diameter_min: 65.9994061463,
              estimated_diameter_max: 147.5791586177
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 15:25',
              epoch_date_close_approach: 1725981900000,
              relative_velocity: {
                kilometers_per_second: '11.3577749627',
                kilometers_per_hour: '40887.9898655587',
                miles_per_hour: '25406.2068139634'
              },
              miss_distance: {
                astronomical: '0.0428476819',
                lunar: '16.6677482591',
                kilometers: '6409921.946677553',
                miles: '3982940.8062461114'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468526?api_key=DEMO_KEY'
          },
          id: '54468526',
          neo_reference_id: '54468526',
          name: '(2024 RG3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468526',
          absolute_magnitude_h: 24.468,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0339590065,
              estimated_diameter_max: 0.0759346471
            },
            meters: {
              estimated_diameter_min: 33.9590065397,
              estimated_diameter_max: 75.9346470712
            },
            miles: {
              estimated_diameter_min: 0.0211011419,
              estimated_diameter_max: 0.0471835876
            },
            feet: {
              estimated_diameter_min: 111.4140670159,
              estimated_diameter_max: 249.1294274972
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 01:40',
              epoch_date_close_approach: 1725932400000,
              relative_velocity: {
                kilometers_per_second: '7.3248487467',
                kilometers_per_hour: '26369.4554879877',
                miles_per_hour: '16384.954161411'
              },
              miss_distance: {
                astronomical: '0.1636368676',
                lunar: '63.6547414964',
                kilometers: '24479726.846432012',
                miles: '15210996.9190732856'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468530?api_key=DEMO_KEY'
          },
          id: '54468530',
          neo_reference_id: '54468530',
          name: '(2024 RM3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468530',
          absolute_magnitude_h: 26.448,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0136444168,
              estimated_diameter_max: 0.0305098434
            },
            meters: {
              estimated_diameter_min: 13.6444167732,
              estimated_diameter_max: 30.5098434183
            },
            miles: {
              estimated_diameter_min: 0.0084782449,
              estimated_diameter_max: 0.0189579319
            },
            feet: {
              estimated_diameter_min: 44.7651483263,
              estimated_diameter_max: 100.0979146804
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 15:52',
              epoch_date_close_approach: 1725983520000,
              relative_velocity: {
                kilometers_per_second: '6.1513326605',
                kilometers_per_hour: '22144.7975776689',
                miles_per_hour: '13759.916028191'
              },
              miss_distance: {
                astronomical: '0.0122812832',
                lunar: '4.7774191648',
                kilometers: '1837253.807586784',
                miles: '1141616.5785702592'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469027?api_key=DEMO_KEY'
          },
          id: '54469027',
          neo_reference_id: '54469027',
          name: '(2024 RA7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469027',
          absolute_magnitude_h: 24.457,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0341314687,
              estimated_diameter_max: 0.0763202842
            },
            meters: {
              estimated_diameter_min: 34.1314686955,
              estimated_diameter_max: 76.3202841751
            },
            miles: {
              estimated_diameter_min: 0.0212083048,
              estimated_diameter_max: 0.0474232113
            },
            feet: {
              estimated_diameter_min: 111.979887755,
              estimated_diameter_max: 250.394641133
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 02:55',
              epoch_date_close_approach: 1725936900000,
              relative_velocity: {
                kilometers_per_second: '14.0025424515',
                kilometers_per_hour: '50409.1528254122',
                miles_per_hour: '31322.287209768'
              },
              miss_distance: {
                astronomical: '0.1085906788',
                lunar: '42.2417740532',
                kilometers: '16244934.250334156',
                miles: '10094134.0719411128'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469033?api_key=DEMO_KEY'
          },
          id: '54469033',
          neo_reference_id: '54469033',
          name: '(2024 RG7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469033',
          absolute_magnitude_h: 24.551,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0326854882,
              estimated_diameter_max: 0.0730869736
            },
            meters: {
              estimated_diameter_min: 32.6854882382,
              estimated_diameter_max: 73.0869735783
            },
            miles: {
              estimated_diameter_min: 0.0203098145,
              estimated_diameter_max: 0.0454141259
            },
            feet: {
              estimated_diameter_min: 107.2358572313,
              estimated_diameter_max: 239.7866663946
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-10',
              close_approach_date_full: '2024-Sep-10 05:25',
              epoch_date_close_approach: 1725945900000,
              relative_velocity: {
                kilometers_per_second: '12.4510963004',
                kilometers_per_hour: '44823.9466813741',
                miles_per_hour: '27851.8573143238'
              },
              miss_distance: {
                astronomical: '0.0505171204',
                lunar: '19.6511598356',
                kilometers: '7557253.610373548',
                miles: '4695859.6435810424'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54469033?api_key=DEMO_KEY'
        }
      ],
      '2024-09-11': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2265196?api_key=DEMO_KEY'
          },
          id: '2265196',
          neo_reference_id: '2265196',
          name: '265196 (2004 BW58)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2265196',
          absolute_magnitude_h: 18.84,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.453476699,
              estimated_diameter_max: 1.0140047252
            },
            meters: {
              estimated_diameter_min: 453.476698997,
              estimated_diameter_max: 1014.0047251696
            },
            miles: {
              estimated_diameter_min: 0.2817772699,
              estimated_diameter_max: 0.6300731301
            },
            feet: {
              estimated_diameter_min: 1487.7844931374,
              estimated_diameter_max: 3326.7872625253
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 12:43',
              epoch_date_close_approach: 1726058580000,
              relative_velocity: {
                kilometers_per_second: '8.0097676514',
                kilometers_per_hour: '28835.1635450236',
                miles_per_hour: '17917.0492594065'
              },
              miss_distance: {
                astronomical: '0.3720271024',
                lunar: '144.7185428336',
                kilometers: '55654462.101311888',
                miles: '34582079.1574365344'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2276049?api_key=DEMO_KEY'
          },
          id: '2276049',
          neo_reference_id: '2276049',
          name: '276049 (2002 CE26)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2276049',
          absolute_magnitude_h: 16.67,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 1.2318419127,
              estimated_diameter_max: 2.7544822542
            },
            meters: {
              estimated_diameter_min: 1231.8419126591,
              estimated_diameter_max: 2754.482254239
            },
            miles: {
              estimated_diameter_min: 0.7654308411,
              estimated_diameter_max: 1.7115553928
            },
            feet: {
              estimated_diameter_min: 4041.4762207283,
              estimated_diameter_max: 9037.0155589975
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 14:07',
              epoch_date_close_approach: 1726063620000,
              relative_velocity: {
                kilometers_per_second: '25.8862476641',
                kilometers_per_hour: '93190.4915908813',
                miles_per_hour: '57904.9473999007'
              },
              miss_distance: {
                astronomical: '0.1792780081',
                lunar: '69.7391451509',
                kilometers: '26819608.149602747',
                miles: '16664931.7410100286'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2337248?api_key=DEMO_KEY'
          },
          id: '2337248',
          neo_reference_id: '2337248',
          name: '337248 (2000 RH60)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2337248',
          absolute_magnitude_h: 20.11,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2526707542,
              estimated_diameter_max: 0.5649889822
            },
            meters: {
              estimated_diameter_min: 252.6707541538,
              estimated_diameter_max: 564.9889822141
            },
            miles: {
              estimated_diameter_min: 0.1570022792,
              estimated_diameter_max: 0.3510677689
            },
            feet: {
              estimated_diameter_min: 828.9723170581,
              estimated_diameter_max: 1853.6384524074
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 02:17',
              epoch_date_close_approach: 1726021020000,
              relative_velocity: {
                kilometers_per_second: '14.2843837754',
                kilometers_per_hour: '51423.7815913745',
                miles_per_hour: '31952.7380671515'
              },
              miss_distance: {
                astronomical: '0.2782727503',
                lunar: '108.2480998667',
                kilometers: '41629010.723921861',
                miles: '25867067.7919732418'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2485110?api_key=DEMO_KEY'
          },
          id: '2485110',
          neo_reference_id: '2485110',
          name: '485110 (2010 HZ108)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2485110',
          absolute_magnitude_h: 20.88,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1772372393,
              estimated_diameter_max: 0.3963145151
            },
            meters: {
              estimated_diameter_min: 177.237239257,
              estimated_diameter_max: 396.314515123
            },
            miles: {
              estimated_diameter_min: 0.1101300806,
              estimated_diameter_max: 0.2462583466
            },
            feet: {
              estimated_diameter_min: 581.4870240439,
              estimated_diameter_max: 1300.2445137962
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 10:31',
              epoch_date_close_approach: 1726050660000,
              relative_velocity: {
                kilometers_per_second: '14.3694599633',
                kilometers_per_hour: '51730.0558678069',
                miles_per_hour: '32143.0449918604'
              },
              miss_distance: {
                astronomical: '0.1486348213',
                lunar: '57.8189454857',
                kilometers: '22235452.674310631',
                miles: '13816469.6136074678'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3167367?api_key=DEMO_KEY'
          },
          id: '3167367',
          neo_reference_id: '3167367',
          name: '(2003 WT153)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3167367',
          absolute_magnitude_h: 28,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0066765941,
              estimated_diameter_max: 0.0149293183
            },
            meters: {
              estimated_diameter_min: 6.676594135,
              estimated_diameter_max: 14.9293183439
            },
            miles: {
              estimated_diameter_min: 0.004148642,
              estimated_diameter_max: 0.0092766455
            },
            feet: {
              estimated_diameter_min: 21.9048371017,
              estimated_diameter_max: 48.9807047955
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 22:16',
              epoch_date_close_approach: 1726092960000,
              relative_velocity: {
                kilometers_per_second: '14.1172531249',
                kilometers_per_hour: '50822.1112497224',
                miles_per_hour: '31578.88351514'
              },
              miss_distance: {
                astronomical: '0.310859154',
                lunar: '120.924210906',
                kilometers: '46503867.30840198',
                miles: '28896163.212548124'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/3167367?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3330689?api_key=DEMO_KEY'
          },
          id: '3330689',
          neo_reference_id: '3330689',
          name: '(2006 HW50)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3330689',
          absolute_magnitude_h: 24.4,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0350392641,
              estimated_diameter_max: 0.0783501764
            },
            meters: {
              estimated_diameter_min: 35.0392641108,
              estimated_diameter_max: 78.3501764334
            },
            miles: {
              estimated_diameter_min: 0.0217723826,
              estimated_diameter_max: 0.0486845275
            },
            feet: {
              estimated_diameter_min: 114.9582192654,
              estimated_diameter_max: 257.0543928497
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 05:51',
              epoch_date_close_approach: 1726033860000,
              relative_velocity: {
                kilometers_per_second: '7.6047440208',
                kilometers_per_hour: '27377.0784747961',
                miles_per_hour: '17011.0519000754'
              },
              miss_distance: {
                astronomical: '0.4649183833',
                lunar: '180.8532511037',
                kilometers: '69550799.865523571',
                miles: '43216863.0438684398'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3601472?api_key=DEMO_KEY'
          },
          id: '3601472',
          neo_reference_id: '3601472',
          name: '(2012 FR1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3601472',
          absolute_magnitude_h: 19.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.4023045798,
              estimated_diameter_max: 0.8995803882
            },
            meters: {
              estimated_diameter_min: 402.3045798343,
              estimated_diameter_max: 899.5803881691
            },
            miles: {
              estimated_diameter_min: 0.2499803991,
              estimated_diameter_max: 0.5589731654
            },
            feet: {
              estimated_diameter_min: 1319.8969577037,
              estimated_diameter_max: 2951.3793207207
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 08:21',
              epoch_date_close_approach: 1726042860000,
              relative_velocity: {
                kilometers_per_second: '25.5140308937',
                kilometers_per_hour: '91850.5112172379',
                miles_per_hour: '57072.3357060665'
              },
              miss_distance: {
                astronomical: '0.1609844637',
                lunar: '62.6229563793',
                kilometers: '24082932.872612319',
                miles: '14964440.5767112422'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3616696?api_key=DEMO_KEY'
          },
          id: '3616696',
          neo_reference_id: '3616696',
          name: '(2012 VM6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3616696',
          absolute_magnitude_h: 25.3,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0231502122,
              estimated_diameter_max: 0.0517654482
            },
            meters: {
              estimated_diameter_min: 23.150212221,
              estimated_diameter_max: 51.7654482198
            },
            miles: {
              estimated_diameter_min: 0.0143848705,
              estimated_diameter_max: 0.0321655483
            },
            feet: {
              estimated_diameter_min: 75.9521422633,
              estimated_diameter_max: 169.8341531374
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 07:23',
              epoch_date_close_approach: 1726039380000,
              relative_velocity: {
                kilometers_per_second: '3.5981889168',
                kilometers_per_hour: '12953.4801004707',
                miles_per_hour: '8048.7887879841'
              },
              miss_distance: {
                astronomical: '0.1026834265',
                lunar: '39.9438529085',
                kilometers: '15361221.888701555',
                miles: '9545020.673149259'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3661506?api_key=DEMO_KEY'
          },
          id: '3661506',
          neo_reference_id: '3661506',
          name: '(2014 CR13)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3661506',
          absolute_magnitude_h: 25.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0192555078,
              estimated_diameter_max: 0.0430566244
            },
            meters: {
              estimated_diameter_min: 19.2555078188,
              estimated_diameter_max: 43.0566244241
            },
            miles: {
              estimated_diameter_min: 0.0119648141,
              estimated_diameter_max: 0.0267541378
            },
            feet: {
              estimated_diameter_min: 63.1742402722,
              estimated_diameter_max: 141.2618956756
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 21:22',
              epoch_date_close_approach: 1726089720000,
              relative_velocity: {
                kilometers_per_second: '18.5652925267',
                kilometers_per_hour: '66835.0530962824',
                miles_per_hour: '41528.7028530761'
              },
              miss_distance: {
                astronomical: '0.2388909992',
                lunar: '92.9285986888',
                kilometers: '35737584.642491704',
                miles: '22206305.3767813552'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/3661506?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3673977?api_key=DEMO_KEY'
          },
          id: '3673977',
          neo_reference_id: '3673977',
          name: '(2014 MA18)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3673977',
          absolute_magnitude_h: 25.5,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0211132445,
              estimated_diameter_max: 0.0472106499
            },
            meters: {
              estimated_diameter_min: 21.113244479,
              estimated_diameter_max: 47.2106498806
            },
            miles: {
              estimated_diameter_min: 0.0131191578,
              estimated_diameter_max: 0.0293353287
            },
            feet: {
              estimated_diameter_min: 69.2691770164,
              estimated_diameter_max: 154.8905885541
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 21:06',
              epoch_date_close_approach: 1726088760000,
              relative_velocity: {
                kilometers_per_second: '18.7631149044',
                kilometers_per_hour: '67547.2136556719',
                miles_per_hour: '41971.2117295479'
              },
              miss_distance: {
                astronomical: '0.377566384',
                lunar: '146.873323376',
                kilometers: '56483126.83000208',
                miles: '35096987.543225504'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3732894?api_key=DEMO_KEY'
          },
          id: '3732894',
          neo_reference_id: '3732894',
          name: '(2015 UC67)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3732894',
          absolute_magnitude_h: 19.61,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3180936332,
              estimated_diameter_max: 0.7112789871
            },
            meters: {
              estimated_diameter_min: 318.0936332215,
              estimated_diameter_max: 711.2789870931
            },
            miles: {
              estimated_diameter_min: 0.197654159,
              estimated_diameter_max: 0.4419681355
            },
            feet: {
              estimated_diameter_min: 1043.6143156183,
              estimated_diameter_max: 2333.5925520145
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 10:19',
              epoch_date_close_approach: 1726049940000,
              relative_velocity: {
                kilometers_per_second: '8.3682365889',
                kilometers_per_hour: '30125.6517199091',
                miles_per_hour: '18718.9084256291'
              },
              miss_distance: {
                astronomical: '0.4541152592',
                lunar: '176.6508358288',
                kilometers: '67934675.510817904',
                miles: '42212649.9358349152'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3760679?api_key=DEMO_KEY'
          },
          id: '3760679',
          neo_reference_id: '3760679',
          name: '(2016 TU19)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3760679',
          absolute_magnitude_h: 24.4,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0350392641,
              estimated_diameter_max: 0.0783501764
            },
            meters: {
              estimated_diameter_min: 35.0392641108,
              estimated_diameter_max: 78.3501764334
            },
            miles: {
              estimated_diameter_min: 0.0217723826,
              estimated_diameter_max: 0.0486845275
            },
            feet: {
              estimated_diameter_min: 114.9582192654,
              estimated_diameter_max: 257.0543928497
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 14:00',
              epoch_date_close_approach: 1726063200000,
              relative_velocity: {
                kilometers_per_second: '10.0589113476',
                kilometers_per_hour: '36212.0808512596',
                miles_per_hour: '22500.778793384'
              },
              miss_distance: {
                astronomical: '0.0338865791',
                lunar: '13.1818792699',
                kilometers: '5069360.054946517',
                miles: '3149954.2728232546'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3781414?api_key=DEMO_KEY'
          },
          id: '3781414',
          neo_reference_id: '3781414',
          name: '(2017 RX2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3781414',
          absolute_magnitude_h: 26.55,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.013018321,
              estimated_diameter_max: 0.0291098508
            },
            meters: {
              estimated_diameter_min: 13.0183210188,
              estimated_diameter_max: 29.109850751
            },
            miles: {
              estimated_diameter_min: 0.0080892071,
              estimated_diameter_max: 0.0180880171
            },
            feet: {
              estimated_diameter_min: 42.7110283314,
              estimated_diameter_max: 95.5047627378
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 16:55',
              epoch_date_close_approach: 1726073700000,
              relative_velocity: {
                kilometers_per_second: '11.0417473915',
                kilometers_per_hour: '39750.2906093996',
                miles_per_hour: '24699.2847400461'
              },
              miss_distance: {
                astronomical: '0.0846372988',
                lunar: '32.9239092332',
                kilometers: '12661559.623033556',
                miles: '7867528.3276168328'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3879138?api_key=DEMO_KEY'
          },
          id: '3879138',
          neo_reference_id: '3879138',
          name: '(2019 TL6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3879138',
          absolute_magnitude_h: 22.54,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0825191939,
              estimated_diameter_max: 0.1845185269
            },
            meters: {
              estimated_diameter_min: 82.5191938525,
              estimated_diameter_max: 184.5185269026
            },
            miles: {
              estimated_diameter_min: 0.051275034,
              estimated_diameter_max: 0.1146544616
            },
            feet: {
              estimated_diameter_min: 270.7322719589,
              estimated_diameter_max: 605.375763803
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 09:57',
              epoch_date_close_approach: 1726048620000,
              relative_velocity: {
                kilometers_per_second: '16.426367105',
                kilometers_per_hour: '59134.9215781724',
                miles_per_hour: '36744.1405772816'
              },
              miss_distance: {
                astronomical: '0.3237213393',
                lunar: '125.9276009877',
                kilometers: '48428022.832827291',
                miles: '30091778.0140309758'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54191843?api_key=DEMO_KEY'
          },
          id: '54191843',
          neo_reference_id: '54191843',
          name: '(2021 RJ)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54191843',
          absolute_magnitude_h: 24.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0305179233,
              estimated_diameter_max: 0.0682401509
            },
            meters: {
              estimated_diameter_min: 30.5179232594,
              estimated_diameter_max: 68.2401509401
            },
            miles: {
              estimated_diameter_min: 0.0189629525,
              estimated_diameter_max: 0.0424024508
            },
            feet: {
              estimated_diameter_min: 100.1244233463,
              estimated_diameter_max: 223.8850168104
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 08:56',
              epoch_date_close_approach: 1726044960000,
              relative_velocity: {
                kilometers_per_second: '12.831690979',
                kilometers_per_hour: '46194.0875244385',
                miles_per_hour: '28703.209550949'
              },
              miss_distance: {
                astronomical: '0.2420091111',
                lunar: '94.1415442179',
                kilometers: '36204047.541153357',
                miles: '22496151.9816440466'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54195880?api_key=DEMO_KEY'
          },
          id: '54195880',
          neo_reference_id: '54195880',
          name: '(2021 RE12)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54195880',
          absolute_magnitude_h: 23.29,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0584191154,
              estimated_diameter_max: 0.1306291133
            },
            meters: {
              estimated_diameter_min: 58.4191154186,
              estimated_diameter_max: 130.6291132614
            },
            miles: {
              estimated_diameter_min: 0.0362999442,
              estimated_diameter_max: 0.0811691427
            },
            feet: {
              estimated_diameter_min: 191.66377063,
              estimated_diameter_max: 428.5732199527
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 17:27',
              epoch_date_close_approach: 1726075620000,
              relative_velocity: {
                kilometers_per_second: '13.0637802186',
                kilometers_per_hour: '47029.6087868603',
                miles_per_hour: '29222.3699709244'
              },
              miss_distance: {
                astronomical: '0.3520774719',
                lunar: '136.9581365691',
                kilometers: '52670039.871224853',
                miles: '32727645.1749068514'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54432969?api_key=DEMO_KEY'
          },
          id: '54432969',
          neo_reference_id: '54432969',
          name: '(2024 GF1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54432969',
          absolute_magnitude_h: 24.51,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0333084924,
              estimated_diameter_max: 0.0744800533
            },
            meters: {
              estimated_diameter_min: 33.3084924299,
              estimated_diameter_max: 74.4800533014
            },
            miles: {
              estimated_diameter_min: 0.0206969312,
              estimated_diameter_max: 0.0462797452
            },
            feet: {
              estimated_diameter_min: 109.2798343039,
              estimated_diameter_max: 244.3571380733
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 09:30',
              epoch_date_close_approach: 1726047000000,
              relative_velocity: {
                kilometers_per_second: '14.718533258',
                kilometers_per_hour: '52986.7197286625',
                miles_per_hour: '32923.8870447348'
              },
              miss_distance: {
                astronomical: '0.4085048009',
                lunar: '158.9083675501',
                kilometers: '61111448.099414083',
                miles: '37972893.0225290254'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467611?api_key=DEMO_KEY'
          },
          id: '54467611',
          neo_reference_id: '54467611',
          name: '(2024 RM)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467611',
          absolute_magnitude_h: 24.177,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0388288901,
              estimated_diameter_max: 0.0868240377
            },
            meters: {
              estimated_diameter_min: 38.8288900933,
              estimated_diameter_max: 86.8240377394
            },
            miles: {
              estimated_diameter_min: 0.0241271463,
              estimated_diameter_max: 0.0539499392
            },
            feet: {
              estimated_diameter_min: 127.3913757736,
              estimated_diameter_max: 284.8557759769
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 11:58',
              epoch_date_close_approach: 1726055880000,
              relative_velocity: {
                kilometers_per_second: '7.4417292058',
                kilometers_per_hour: '26790.2251409845',
                miles_per_hour: '16646.404060519'
              },
              miss_distance: {
                astronomical: '0.1280357643',
                lunar: '49.8059123127',
                kilometers: '19153877.623102041',
                miles: '11901667.6673325258'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467976?api_key=DEMO_KEY'
          },
          id: '54467976',
          neo_reference_id: '54467976',
          name: '(2024 RO1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467976',
          absolute_magnitude_h: 25.947,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0171852153,
              estimated_diameter_max: 0.0384273095
            },
            meters: {
              estimated_diameter_min: 17.185215267,
              estimated_diameter_max: 38.427309545
            },
            miles: {
              estimated_diameter_min: 0.0106783944,
              estimated_diameter_max: 0.0238776158
            },
            feet: {
              estimated_diameter_min: 56.3819416567,
              estimated_diameter_max: 126.0738542477
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 17:10',
              epoch_date_close_approach: 1726074600000,
              relative_velocity: {
                kilometers_per_second: '9.4073498928',
                kilometers_per_hour: '33866.4596142023',
                miles_per_hour: '21043.3009752803'
              },
              miss_distance: {
                astronomical: '0.0233769249',
                lunar: '9.0936237861',
                kilometers: '3497138.172189963',
                miles: '2173020.8958809694'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468770?api_key=DEMO_KEY'
          },
          id: '54468770',
          neo_reference_id: '54468770',
          name: '(2024 RY3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468770',
          absolute_magnitude_h: 26.967,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0107437273,
              estimated_diameter_max: 0.0240237046
            },
            meters: {
              estimated_diameter_min: 10.7437273044,
              estimated_diameter_max: 24.0237045844
            },
            miles: {
              estimated_diameter_min: 0.0066758406,
              estimated_diameter_max: 0.0149276333
            },
            feet: {
              estimated_diameter_min: 35.2484502894,
              estimated_diameter_max: 78.8179309486
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 03:00',
              epoch_date_close_approach: 1726023600000,
              relative_velocity: {
                kilometers_per_second: '14.1428992928',
                kilometers_per_hour: '50914.4374541876',
                miles_per_hour: '31636.2514281312'
              },
              miss_distance: {
                astronomical: '0.0090312726',
                lunar: '3.5131650414',
                kilometers: '1351059.144349362',
                miles: '839509.2237387156'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468792?api_key=DEMO_KEY'
          },
          id: '54468792',
          neo_reference_id: '54468792',
          name: '(2024 RW4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468792',
          absolute_magnitude_h: 24.869,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0282328666,
              estimated_diameter_max: 0.063130609
            },
            meters: {
              estimated_diameter_min: 28.2328666326,
              estimated_diameter_max: 63.1306089902
            },
            miles: {
              estimated_diameter_min: 0.0175430846,
              estimated_diameter_max: 0.0392275296
            },
            feet: {
              estimated_diameter_min: 92.6275181629,
              estimated_diameter_max: 207.1214271994
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 12:57',
              epoch_date_close_approach: 1726059420000,
              relative_velocity: {
                kilometers_per_second: '5.1312822842',
                kilometers_per_hour: '18472.6162229553',
                miles_per_hour: '11478.1653414246'
              },
              miss_distance: {
                astronomical: '0.022127457',
                lunar: '8.607580773',
                kilometers: '3310220.43571659',
                miles: '2056875.600165342'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469532?api_key=DEMO_KEY'
          },
          id: '54469532',
          neo_reference_id: '54469532',
          name: '(2024 RL8)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469532',
          absolute_magnitude_h: 27.311,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0091696968,
              estimated_diameter_max: 0.0205040654
            },
            meters: {
              estimated_diameter_min: 9.1696968176,
              estimated_diameter_max: 20.5040654173
            },
            miles: {
              estimated_diameter_min: 0.0056977837,
              estimated_diameter_max: 0.0127406316
            },
            feet: {
              estimated_diameter_min: 30.0843081071,
              estimated_diameter_max: 67.2705579836
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-11',
              close_approach_date_full: '2024-Sep-11 22:51',
              epoch_date_close_approach: 1726095060000,
              relative_velocity: {
                kilometers_per_second: '13.341134488',
                kilometers_per_hour: '48028.084156791',
                miles_per_hour: '29842.7837362016'
              },
              miss_distance: {
                astronomical: '0.00287244',
                lunar: '1.11737916',
                kilometers: '429710.9057028',
                miles: '267009.97538664'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54469532?api_key=DEMO_KEY'
        }
      ],
      '2024-09-16': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2007336?api_key=DEMO_KEY'
          },
          id: '2007336',
          neo_reference_id: '2007336',
          name: '7336 Saunders (1989 RS1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2007336',
          absolute_magnitude_h: 18.91,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.439091446,
              estimated_diameter_max: 0.9818383215
            },
            meters: {
              estimated_diameter_min: 439.0914459693,
              estimated_diameter_max: 981.838321526
            },
            miles: {
              estimated_diameter_min: 0.2728386909,
              estimated_diameter_max: 0.6100858597
            },
            feet: {
              estimated_diameter_min: 1440.5887795938,
              estimated_diameter_max: 3221.2544387953
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 20:18',
              epoch_date_close_approach: 1726517880000,
              relative_velocity: {
                kilometers_per_second: '5.8985132966',
                kilometers_per_hour: '21234.6478677152',
                miles_per_hour: '13194.3843931367'
              },
              miss_distance: {
                astronomical: '0.236907692',
                lunar: '92.157092188',
                kilometers: '35440886.10981604',
                miles: '22021945.457459752'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3252347?api_key=DEMO_KEY'
          },
          id: '3252347',
          neo_reference_id: '3252347',
          name: '(2004 RX164)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3252347',
          absolute_magnitude_h: 21.33,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1440638367,
              estimated_diameter_max: 0.3221365319
            },
            meters: {
              estimated_diameter_min: 144.0638366688,
              estimated_diameter_max: 322.1365318908
            },
            miles: {
              estimated_diameter_min: 0.0895170903,
              estimated_diameter_max: 0.200166299
            },
            feet: {
              estimated_diameter_min: 472.6503978963,
              estimated_diameter_max: 1056.8784192885
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 04:09',
              epoch_date_close_approach: 1726459740000,
              relative_velocity: {
                kilometers_per_second: '15.9033466469',
                kilometers_per_hour: '57252.0479289534',
                miles_per_hour: '35574.1961145211'
              },
              miss_distance: {
                astronomical: '0.1259473805',
                lunar: '48.9935310145',
                kilometers: '18841459.854879535',
                miles: '11707540.267966183'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3430492?api_key=DEMO_KEY'
          },
          id: '3430492',
          neo_reference_id: '3430492',
          name: '(2008 TP26)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3430492',
          absolute_magnitude_h: 23.82,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0457672667,
              estimated_diameter_max: 0.1023387195
            },
            meters: {
              estimated_diameter_min: 45.7672667231,
              estimated_diameter_max: 102.3387195373
            },
            miles: {
              estimated_diameter_min: 0.0284384523,
              estimated_diameter_max: 0.0635903125
            },
            feet: {
              estimated_diameter_min: 150.1550793559,
              estimated_diameter_max: 335.7569646067
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 20:08',
              epoch_date_close_approach: 1726517280000,
              relative_velocity: {
                kilometers_per_second: '11.0894203914',
                kilometers_per_hour: '39921.9134089637',
                miles_per_hour: '24805.9244734752'
              },
              miss_distance: {
                astronomical: '0.0905315878',
                lunar: '35.2167876542',
                kilometers: '13543332.702597986',
                miles: '8415436.7124087668'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3729233?api_key=DEMO_KEY'
          },
          id: '3729233',
          neo_reference_id: '3729233',
          name: '(2015 TG24)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3729233',
          absolute_magnitude_h: 26.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0121494041,
              estimated_diameter_max: 0.0271668934
            },
            meters: {
              estimated_diameter_min: 12.14940408,
              estimated_diameter_max: 27.1668934089
            },
            miles: {
              estimated_diameter_min: 0.0075492874,
              estimated_diameter_max: 0.0168807197
            },
            feet: {
              estimated_diameter_min: 39.8602508817,
              estimated_diameter_max: 89.1302305717
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 18:20',
              epoch_date_close_approach: 1726510800000,
              relative_velocity: {
                kilometers_per_second: '8.3620558033',
                kilometers_per_hour: '30103.4008918745',
                miles_per_hour: '18705.0826263983'
              },
              miss_distance: {
                astronomical: '0.0798167463',
                lunar: '31.0487143107',
                kilometers: '11940415.236810381',
                miles: '7419429.9846140178'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/3729233?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3838102?api_key=DEMO_KEY'
          },
          id: '3838102',
          neo_reference_id: '3838102',
          name: '(2019 CZ)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3838102',
          absolute_magnitude_h: 26.3,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0146067964,
              estimated_diameter_max: 0.0326617897
            },
            meters: {
              estimated_diameter_min: 14.6067964271,
              estimated_diameter_max: 32.6617897446
            },
            miles: {
              estimated_diameter_min: 0.0090762397,
              estimated_diameter_max: 0.020295089
            },
            feet: {
              estimated_diameter_min: 47.92256199,
              estimated_diameter_max: 107.1581062656
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 01:46',
              epoch_date_close_approach: 1726451160000,
              relative_velocity: {
                kilometers_per_second: '7.0041538989',
                kilometers_per_hour: '25214.9540361289',
                miles_per_hour: '15667.5918565047'
              },
              miss_distance: {
                astronomical: '0.4358997198',
                lunar: '169.5649910022',
                kilometers: '65209669.615676826',
                miles: '40519409.7891831588'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3892010?api_key=DEMO_KEY'
          },
          id: '3892010',
          neo_reference_id: '3892010',
          name: '(2019 UE13)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3892010',
          absolute_magnitude_h: 25.75,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0188171989,
              estimated_diameter_max: 0.042076536
            },
            meters: {
              estimated_diameter_min: 18.8171989489,
              estimated_diameter_max: 42.0765359959
            },
            miles: {
              estimated_diameter_min: 0.0116924617,
              estimated_diameter_max: 0.0261451392
            },
            feet: {
              estimated_diameter_min: 61.7362189996,
              estimated_diameter_max: 138.0463823569
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 05:02',
              epoch_date_close_approach: 1726462920000,
              relative_velocity: {
                kilometers_per_second: '7.8000848223',
                kilometers_per_hour: '28080.3053604047',
                miles_per_hour: '17448.0097390804'
              },
              miss_distance: {
                astronomical: '0.1127466526',
                lunar: '43.8584478614',
                kilometers: '16866659.078589962',
                miles: '10480455.9662349956'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54131585?api_key=DEMO_KEY'
          },
          id: '54131585',
          neo_reference_id: '54131585',
          name: '(2021 EQ4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54131585',
          absolute_magnitude_h: 26.16,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0155795524,
              estimated_diameter_max: 0.0348369383
            },
            meters: {
              estimated_diameter_min: 15.5795524128,
              estimated_diameter_max: 34.836938254
            },
            miles: {
              estimated_diameter_min: 0.0096806821,
              estimated_diameter_max: 0.0216466632
            },
            feet: {
              estimated_diameter_min: 51.114018738,
              estimated_diameter_max: 114.2944205013
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 19:21',
              epoch_date_close_approach: 1726514460000,
              relative_velocity: {
                kilometers_per_second: '13.8380616178',
                kilometers_per_hour: '49817.0218241362',
                miles_per_hour: '30954.3600328917'
              },
              miss_distance: {
                astronomical: '0.2407029403',
                lunar: '93.6334437767',
                kilometers: '36008647.171617161',
                miles: '22374735.8221563818'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54136189?api_key=DEMO_KEY'
          },
          id: '54136189',
          neo_reference_id: '54136189',
          name: '(2021 GX5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54136189',
          absolute_magnitude_h: 20.35,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2262324906,
              estimated_diameter_max: 0.5058712276
            },
            meters: {
              estimated_diameter_min: 226.2324905542,
              estimated_diameter_max: 505.8712275983
            },
            miles: {
              estimated_diameter_min: 0.1405743089,
              estimated_diameter_max: 0.3143337106
            },
            feet: {
              estimated_diameter_min: 742.2326043098,
              estimated_diameter_max: 1659.6825583534
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 05:36',
              epoch_date_close_approach: 1726464960000,
              relative_velocity: {
                kilometers_per_second: '18.7476278922',
                kilometers_per_hour: '67491.4604117756',
                miles_per_hour: '41936.5688319725'
              },
              miss_distance: {
                astronomical: '0.2542747424',
                lunar: '98.9128747936',
                kilometers: '38038959.857838688',
                miles: '23636313.6252343744'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54386827?api_key=DEMO_KEY'
          },
          id: '54386827',
          neo_reference_id: '54386827',
          name: '(2023 SE4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54386827',
          absolute_magnitude_h: 26.98,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0106795998,
              estimated_diameter_max: 0.023880311
            },
            meters: {
              estimated_diameter_min: 10.6795997524,
              estimated_diameter_max: 23.8803110188
            },
            miles: {
              estimated_diameter_min: 0.0066359936,
              estimated_diameter_max: 0.0148385327
            },
            feet: {
              estimated_diameter_min: 35.0380580515,
              estimated_diameter_max: 78.3474796028
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 00:07',
              epoch_date_close_approach: 1726445220000,
              relative_velocity: {
                kilometers_per_second: '17.1490602226',
                kilometers_per_hour: '61736.6168013172',
                miles_per_hour: '38360.7328119073'
              },
              miss_distance: {
                astronomical: '0.4332344995',
                lunar: '168.5282203055',
                kilometers: '64810958.335716065',
                miles: '40271662.088029097'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54439893?api_key=DEMO_KEY'
          },
          id: '54439893',
          neo_reference_id: '54439893',
          name: '(2024 JE2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54439893',
          absolute_magnitude_h: 20.3,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2315021222,
              estimated_diameter_max: 0.5176544822
            },
            meters: {
              estimated_diameter_min: 231.5021222103,
              estimated_diameter_max: 517.6544821978
            },
            miles: {
              estimated_diameter_min: 0.1438487052,
              estimated_diameter_max: 0.3216554833
            },
            feet: {
              estimated_diameter_min: 759.5214226325,
              estimated_diameter_max: 1698.3415313737
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 16:19',
              epoch_date_close_approach: 1726503540000,
              relative_velocity: {
                kilometers_per_second: '11.7422002965',
                kilometers_per_hour: '42271.9210674929',
                miles_per_hour: '26266.1278432986'
              },
              miss_distance: {
                astronomical: '0.1730726043',
                lunar: '67.3252430727',
                kilometers: '25891292.958632841',
                miles: '16088103.4292255658'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467188?api_key=DEMO_KEY'
          },
          id: '54467188',
          neo_reference_id: '54467188',
          name: '(2024 QE1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467188',
          absolute_magnitude_h: 20.656,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1964965713,
              estimated_diameter_max: 0.4393796907
            },
            meters: {
              estimated_diameter_min: 196.496571256,
              estimated_diameter_max: 439.3796906741
            },
            miles: {
              estimated_diameter_min: 0.122097271,
              estimated_diameter_max: 0.2730177978
            },
            feet: {
              estimated_diameter_min: 644.6738108396,
              estimated_diameter_max: 1441.5344643512
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 05:51',
              epoch_date_close_approach: 1726465860000,
              relative_velocity: {
                kilometers_per_second: '14.168581794',
                kilometers_per_hour: '51006.8944585235',
                miles_per_hour: '31693.7006150753'
              },
              miss_distance: {
                astronomical: '0.2607878124',
                lunar: '101.4464590236',
                kilometers: '39013301.256999588',
                miles: '24241741.2966187944'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467615?api_key=DEMO_KEY'
          },
          id: '54467615',
          neo_reference_id: '54467615',
          name: '(2024 RQ)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467615',
          absolute_magnitude_h: 25.107,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0253020073,
              estimated_diameter_max: 0.0565770083
            },
            meters: {
              estimated_diameter_min: 25.3020072946,
              estimated_diameter_max: 56.577008278
            },
            miles: {
              estimated_diameter_min: 0.0157219336,
              estimated_diameter_max: 0.0351553122
            },
            feet: {
              estimated_diameter_min: 83.0118376125,
              estimated_diameter_max: 185.6201118388
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 10:35',
              epoch_date_close_approach: 1726482900000,
              relative_velocity: {
                kilometers_per_second: '6.7023455962',
                kilometers_per_hour: '24128.4441462304',
                miles_per_hour: '14992.4768640841'
              },
              miss_distance: {
                astronomical: '0.0035047202',
                lunar: '1.3633361578',
                kilometers: '524298.676865974',
                miles: '325784.0909954812'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54467615?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467982?api_key=DEMO_KEY'
          },
          id: '54467982',
          neo_reference_id: '54467982',
          name: '(2024 RT1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467982',
          absolute_magnitude_h: 23.413,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0552020208,
              estimated_diameter_max: 0.1234354711
            },
            meters: {
              estimated_diameter_min: 55.2020208272,
              estimated_diameter_max: 123.435471065
            },
            miles: {
              estimated_diameter_min: 0.0343009349,
              estimated_diameter_max: 0.0766992221
            },
            feet: {
              estimated_diameter_min: 181.1089980107,
              estimated_diameter_max: 404.9720308888
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 11:06',
              epoch_date_close_approach: 1726484760000,
              relative_velocity: {
                kilometers_per_second: '8.8574599384',
                kilometers_per_hour: '31886.8557783082',
                miles_per_hour: '19813.2521362493'
              },
              miss_distance: {
                astronomical: '0.1276901876',
                lunar: '49.6714829764',
                kilometers: '19102180.084860412',
                miles: '11869544.3066492056'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468517?api_key=DEMO_KEY'
          },
          id: '54468517',
          neo_reference_id: '54468517',
          name: '(2024 RA3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468517',
          absolute_magnitude_h: 24.446,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0343048067,
              estimated_diameter_max: 0.0767078798
            },
            meters: {
              estimated_diameter_min: 34.3048067072,
              estimated_diameter_max: 76.7078797522
            },
            miles: {
              estimated_diameter_min: 0.021316012,
              estimated_diameter_max: 0.0476640519
            },
            feet: {
              estimated_diameter_min: 112.5485820371,
              estimated_diameter_max: 251.6662802063
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 03:19',
              epoch_date_close_approach: 1726456740000,
              relative_velocity: {
                kilometers_per_second: '9.9198007981',
                kilometers_per_hour: '35711.2828732689',
                miles_per_hour: '22189.6024053375'
              },
              miss_distance: {
                astronomical: '0.0740768872',
                lunar: '28.8159091208',
                kilometers: '11081744.541350264',
                miles: '6885876.7556470832'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468784?api_key=DEMO_KEY'
          },
          id: '54468784',
          neo_reference_id: '54468784',
          name: '(2024 RN4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468784',
          absolute_magnitude_h: 22.979,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0674147575,
              estimated_diameter_max: 0.1507439804
            },
            meters: {
              estimated_diameter_min: 67.4147574943,
              estimated_diameter_max: 150.743980444
            },
            miles: {
              estimated_diameter_min: 0.0418895753,
              estimated_diameter_max: 0.0936679379
            },
            feet: {
              estimated_diameter_min: 221.1770329777,
              estimated_diameter_max: 494.5668807999
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 01:33',
              epoch_date_close_approach: 1726450380000,
              relative_velocity: {
                kilometers_per_second: '4.5046040493',
                kilometers_per_hour: '16216.5745773784',
                miles_per_hour: '10076.348797816'
              },
              miss_distance: {
                astronomical: '0.2316827216',
                lunar: '90.1245787024',
                kilometers: '34659241.667162992',
                miles: '21536254.1226016096'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54470172?api_key=DEMO_KEY'
          },
          id: '54470172',
          neo_reference_id: '54470172',
          name: '(2024 RJ10)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54470172',
          absolute_magnitude_h: 24.234,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0378229132,
              estimated_diameter_max: 0.0845746051
            },
            meters: {
              estimated_diameter_min: 37.8229132469,
              estimated_diameter_max: 84.5746051272
            },
            miles: {
              estimated_diameter_min: 0.0235020614,
              estimated_diameter_max: 0.052552207
            },
            feet: {
              estimated_diameter_min: 124.090926697,
              estimated_diameter_max: 277.4757474855
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-16',
              close_approach_date_full: '2024-Sep-16 15:00',
              epoch_date_close_approach: 1726498800000,
              relative_velocity: {
                kilometers_per_second: '13.3192714174',
                kilometers_per_hour: '47949.3771027894',
                miles_per_hour: '29793.8782336749'
              },
              miss_distance: {
                astronomical: '0.0561875848',
                lunar: '21.8569704872',
                kilometers: '8405543.006524376',
                miles: '5222962.2322773488'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ],
      '2024-09-17': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2470678?api_key=DEMO_KEY'
          },
          id: '2470678',
          neo_reference_id: '2470678',
          name: '470678 (2008 SS251)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2470678',
          absolute_magnitude_h: 21.14,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1572370824,
              estimated_diameter_max: 0.3515928047
            },
            meters: {
              estimated_diameter_min: 157.2370823638,
              estimated_diameter_max: 351.5928047493
            },
            miles: {
              estimated_diameter_min: 0.0977025631,
              estimated_diameter_max: 0.2184695727
            },
            feet: {
              estimated_diameter_min: 515.8697093026,
              estimated_diameter_max: 1153.5197375336
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 19:46',
              epoch_date_close_approach: 1726602360000,
              relative_velocity: {
                kilometers_per_second: '4.3714284951',
                kilometers_per_hour: '15737.1425824378',
                miles_per_hour: '9778.4484007376'
              },
              miss_distance: {
                astronomical: '0.2959503663',
                lunar: '115.1246924907',
                kilometers: '44273544.424199781',
                miles: '27510304.8354117378'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3345236?api_key=DEMO_KEY'
          },
          id: '3345236',
          neo_reference_id: '3345236',
          name: '(2006 SO78)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3345236',
          absolute_magnitude_h: 19.07,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.407901194,
              estimated_diameter_max: 0.912094798
            },
            meters: {
              estimated_diameter_min: 407.9011940281,
              estimated_diameter_max: 912.0947979501
            },
            miles: {
              estimated_diameter_min: 0.2534579728,
              estimated_diameter_max: 0.5667492567
            },
            feet: {
              estimated_diameter_min: 1338.258553415,
              estimated_diameter_max: 2992.4370969065
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 01:40',
              epoch_date_close_approach: 1726537200000,
              relative_velocity: {
                kilometers_per_second: '15.3740840426',
                kilometers_per_hour: '55346.7025535339',
                miles_per_hour: '34390.288595'
              },
              miss_distance: {
                astronomical: '0.1863325769',
                lunar: '72.4833724141',
                kilometers: '27874956.615851203',
                miles: '17320694.8697964814'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3383901?api_key=DEMO_KEY'
          },
          id: '3383901',
          neo_reference_id: '3383901',
          name: '(2007 RT1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3383901',
          absolute_magnitude_h: 20.6,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2016299194,
              estimated_diameter_max: 0.4508582062
            },
            meters: {
              estimated_diameter_min: 201.6299194428,
              estimated_diameter_max: 450.8582061718
            },
            miles: {
              estimated_diameter_min: 0.1252869847,
              estimated_diameter_max: 0.2801502144
            },
            feet: {
              estimated_diameter_min: 661.5155049046,
              estimated_diameter_max: 1479.1936371367
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 10:59',
              epoch_date_close_approach: 1726570740000,
              relative_velocity: {
                kilometers_per_second: '41.4614662872',
                kilometers_per_hour: '149261.2786340424',
                miles_per_hour: '92745.1539379137'
              },
              miss_distance: {
                astronomical: '0.4706392994',
                lunar: '183.0786874666',
                kilometers: '70406636.728532278',
                miles: '43748655.4110023164'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3467261?api_key=DEMO_KEY'
          },
          id: '3467261',
          neo_reference_id: '3467261',
          name: '(2009 SL2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3467261',
          absolute_magnitude_h: 22.15,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0987540639,
              estimated_diameter_max: 0.2208207999
            },
            meters: {
              estimated_diameter_min: 98.754063894,
              estimated_diameter_max: 220.8207999214
            },
            miles: {
              estimated_diameter_min: 0.0613629114,
              estimated_diameter_max: 0.1372116413
            },
            feet: {
              estimated_diameter_min: 323.9962829861,
              estimated_diameter_max: 724.4777132141
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 20:35',
              epoch_date_close_approach: 1726605300000,
              relative_velocity: {
                kilometers_per_second: '13.0919864101',
                kilometers_per_hour: '47131.1510762516',
                miles_per_hour: '29285.4644006854'
              },
              miss_distance: {
                astronomical: '0.166093855',
                lunar: '64.610509595',
                kilometers: '24847286.92808885',
                miles: '15439388.16317213'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3770328?api_key=DEMO_KEY'
          },
          id: '3770328',
          neo_reference_id: '3770328',
          name: '(2017 EL)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3770328',
          absolute_magnitude_h: 25.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0253837029,
              estimated_diameter_max: 0.0567596853
            },
            meters: {
              estimated_diameter_min: 25.3837029364,
              estimated_diameter_max: 56.7596852866
            },
            miles: {
              estimated_diameter_min: 0.0157726969,
              estimated_diameter_max: 0.0352688224
            },
            feet: {
              estimated_diameter_min: 83.279867942,
              estimated_diameter_max: 186.2194458756
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 08:17',
              epoch_date_close_approach: 1726561020000,
              relative_velocity: {
                kilometers_per_second: '12.9616752809',
                kilometers_per_hour: '46662.0310112576',
                miles_per_hour: '28993.9714358562'
              },
              miss_distance: {
                astronomical: '0.3638271986',
                lunar: '141.5287802554',
                kilometers: '54427773.958626982',
                miles: '33819850.4905850716'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3802577?api_key=DEMO_KEY'
          },
          id: '3802577',
          neo_reference_id: '3802577',
          name: '(2018 GY3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3802577',
          absolute_magnitude_h: 27.6,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0080270317,
              estimated_diameter_max: 0.0179489885
            },
            meters: {
              estimated_diameter_min: 8.0270316728,
              estimated_diameter_max: 17.948988478
            },
            miles: {
              estimated_diameter_min: 0.0049877647,
              estimated_diameter_max: 0.0111529809
            },
            feet: {
              estimated_diameter_min: 26.3354065935,
              estimated_diameter_max: 58.8877593581
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 22:14',
              epoch_date_close_approach: 1726611240000,
              relative_velocity: {
                kilometers_per_second: '12.887245933',
                kilometers_per_hour: '46394.0853588842',
                miles_per_hour: '28827.48042758'
              },
              miss_distance: {
                astronomical: '0.0605048359',
                lunar: '23.5363811651',
                kilometers: '9051394.575339533',
                miles: '5624275.7879822354'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3819747?api_key=DEMO_KEY'
          },
          id: '3819747',
          neo_reference_id: '3819747',
          name: '(2018 JP)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3819747',
          absolute_magnitude_h: 27.4,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0088014652,
              estimated_diameter_max: 0.0196806745
            },
            meters: {
              estimated_diameter_min: 8.801465209,
              estimated_diameter_max: 19.6806745089
            },
            miles: {
              estimated_diameter_min: 0.0054689752,
              estimated_diameter_max: 0.0122290004
            },
            feet: {
              estimated_diameter_min: 28.8761991163,
              estimated_diameter_max: 64.5691441559
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 01:58',
              epoch_date_close_approach: 1726538280000,
              relative_velocity: {
                kilometers_per_second: '5.515749333',
                kilometers_per_hour: '19856.6975987171',
                miles_per_hour: '12338.1796829362'
              },
              miss_distance: {
                astronomical: '0.3476710598',
                lunar: '135.2440422622',
                kilometers: '52010850.006722626',
                miles: '32318043.5865831988'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54051420?api_key=DEMO_KEY'
          },
          id: '54051420',
          neo_reference_id: '54051420',
          name: '(2020 QL6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54051420',
          absolute_magnitude_h: 19.34,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3602093458,
              estimated_diameter_max: 0.8054525833
            },
            meters: {
              estimated_diameter_min: 360.2093458029,
              estimated_diameter_max: 805.452583346
            },
            miles: {
              estimated_diameter_min: 0.2238236414,
              estimated_diameter_max: 0.5004848772
            },
            feet: {
              estimated_diameter_min: 1181.789230084,
              estimated_diameter_max: 2642.561053545
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 04:02',
              epoch_date_close_approach: 1726545720000,
              relative_velocity: {
                kilometers_per_second: '22.0268205069',
                kilometers_per_hour: '79296.5538248285',
                miles_per_hour: '49271.7947918775'
              },
              miss_distance: {
                astronomical: '0.4821186138',
                lunar: '187.5441407682',
                kilometers: '72123917.711832606',
                miles: '44815724.3333817228'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54054565?api_key=DEMO_KEY'
          },
          id: '54054565',
          neo_reference_id: '54054565',
          name: '(2020 SE3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54054565',
          absolute_magnitude_h: 20.97,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1700415193,
              estimated_diameter_max: 0.3802243961
            },
            meters: {
              estimated_diameter_min: 170.0415192713,
              estimated_diameter_max: 380.2243960879
            },
            miles: {
              estimated_diameter_min: 0.1056588689,
              estimated_diameter_max: 0.2362604132
            },
            feet: {
              estimated_diameter_min: 557.879018086,
              estimated_diameter_max: 1247.4554076612
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 01:22',
              epoch_date_close_approach: 1726536120000,
              relative_velocity: {
                kilometers_per_second: '39.1214662565',
                kilometers_per_hour: '140837.2785235044',
                miles_per_hour: '87510.8078692297'
              },
              miss_distance: {
                astronomical: '0.3224529303',
                lunar: '125.4341898867',
                kilometers: '48238271.548138461',
                miles: '29973872.0330983218'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54224433?api_key=DEMO_KEY'
          },
          id: '54224433',
          neo_reference_id: '54224433',
          name: '(2021 WN2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54224433',
          absolute_magnitude_h: 26.72,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0120380177,
              estimated_diameter_max: 0.0269178258
            },
            meters: {
              estimated_diameter_min: 12.0380176738,
              estimated_diameter_max: 26.917825833
            },
            miles: {
              estimated_diameter_min: 0.0074800751,
              estimated_diameter_max: 0.0167259564
            },
            feet: {
              estimated_diameter_min: 39.494809905,
              estimated_diameter_max: 88.3130797061
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 08:32',
              epoch_date_close_approach: 1726561920000,
              relative_velocity: {
                kilometers_per_second: '7.2621434435',
                kilometers_per_hour: '26143.7163966748',
                miles_per_hour: '16244.6886688117'
              },
              miss_distance: {
                astronomical: '0.2905742223',
                lunar: '113.0333724747',
                kilometers: '43469284.732986501',
                miles: '27010561.0367196738'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54224433?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54290859?api_key=DEMO_KEY'
          },
          id: '54290859',
          neo_reference_id: '54290859',
          name: '(2022 OQ)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54290859',
          absolute_magnitude_h: 24.92,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0275775053,
              estimated_diameter_max: 0.0616651765
            },
            meters: {
              estimated_diameter_min: 27.5775052924,
              estimated_diameter_max: 61.6651764838
            },
            miles: {
              estimated_diameter_min: 0.017135862,
              estimated_diameter_max: 0.0383169524
            },
            feet: {
              estimated_diameter_min: 90.4773824637,
              estimated_diameter_max: 202.313577615
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 15:45',
              epoch_date_close_approach: 1726587900000,
              relative_velocity: {
                kilometers_per_second: '6.940570675',
                kilometers_per_hour: '24986.0544301383',
                miles_per_hour: '15525.3625429934'
              },
              miss_distance: {
                astronomical: '0.2660748843',
                lunar: '103.5031299927',
                kilometers: '39804235.951776441',
                miles: '24733205.3264632458'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54301298?api_key=DEMO_KEY'
          },
          id: '54301298',
          neo_reference_id: '54301298',
          name: '(2022 RS1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54301298',
          absolute_magnitude_h: 27.82,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0072536229,
              estimated_diameter_max: 0.016219594
            },
            meters: {
              estimated_diameter_min: 7.2536229467,
              estimated_diameter_max: 16.219593992
            },
            miles: {
              estimated_diameter_min: 0.0045071909,
              estimated_diameter_max: 0.0100783853
            },
            feet: {
              estimated_diameter_min: 23.7979763085,
              estimated_diameter_max: 53.2138927527
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 09:20',
              epoch_date_close_approach: 1726564800000,
              relative_velocity: {
                kilometers_per_second: '13.8664351551',
                kilometers_per_hour: '49919.1665584399',
                miles_per_hour: '31017.8287984928'
              },
              miss_distance: {
                astronomical: '0.3808861879',
                lunar: '148.1647270931',
                kilometers: '56979762.422259773',
                miles: '35405582.5905119474'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54301298?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54423509?api_key=DEMO_KEY'
          },
          id: '54423509',
          neo_reference_id: '54423509',
          name: '(2024 CC)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54423509',
          absolute_magnitude_h: 25.18,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0244655496,
              estimated_diameter_max: 0.0547066321
            },
            meters: {
              estimated_diameter_min: 24.4655496172,
              estimated_diameter_max: 54.706632051
            },
            miles: {
              estimated_diameter_min: 0.015202183,
              estimated_diameter_max: 0.0339931147
            },
            feet: {
              estimated_diameter_min: 80.2675538061,
              estimated_diameter_max: 179.483706698
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 10:21',
              epoch_date_close_approach: 1726568460000,
              relative_velocity: {
                kilometers_per_second: '9.0084455497',
                kilometers_per_hour: '32430.4039789249',
                miles_per_hour: '20150.991850127'
              },
              miss_distance: {
                astronomical: '0.2800362591',
                lunar: '108.9341047899',
                kilometers: '41892827.884128117',
                miles: '26030996.1738653346'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54437048?api_key=DEMO_KEY'
          },
          id: '54437048',
          neo_reference_id: '54437048',
          name: '(2024 HJ1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54437048',
          absolute_magnitude_h: 20.62,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1997813652,
              estimated_diameter_max: 0.4467247133
            },
            meters: {
              estimated_diameter_min: 199.78136523,
              estimated_diameter_max: 446.7247132921
            },
            miles: {
              estimated_diameter_min: 0.1241383467,
              estimated_diameter_max: 0.2775817818
            },
            feet: {
              estimated_diameter_min: 655.4506943013,
              estimated_diameter_max: 1465.6323083572
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 06:49',
              epoch_date_close_approach: 1726555740000,
              relative_velocity: {
                kilometers_per_second: '17.1758964688',
                kilometers_per_hour: '61833.2272875241',
                miles_per_hour: '38420.7628109619'
              },
              miss_distance: {
                astronomical: '0.4843651156',
                lunar: '188.4180299684',
                kilometers: '72459989.596063772',
                miles: '45024549.7188811736'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54465209?api_key=DEMO_KEY'
          },
          id: '54465209',
          neo_reference_id: '54465209',
          name: '(2024 ON)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54465209',
          absolute_magnitude_h: 20.489,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2122046892,
              estimated_diameter_max: 0.4745041103
            },
            meters: {
              estimated_diameter_min: 212.2046892484,
              estimated_diameter_max: 474.5041103035
            },
            miles: {
              estimated_diameter_min: 0.13185784,
              estimated_diameter_max: 0.2948430935
            },
            feet: {
              estimated_diameter_min: 696.2096326736,
              estimated_diameter_max: 1556.7720652483
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 10:19',
              epoch_date_close_approach: 1726568340000,
              relative_velocity: {
                kilometers_per_second: '8.8747433493',
                kilometers_per_hour: '31949.0760574975',
                miles_per_hour: '19851.9133980601'
              },
              miss_distance: {
                astronomical: '0.0066844379',
                lunar: '2.6002463431',
                kilometers: '999977.671987273',
                miles: '621357.3126514474'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54465293?api_key=DEMO_KEY'
          },
          id: '54465293',
          neo_reference_id: '54465293',
          name: '(2024 PB)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54465293',
          absolute_magnitude_h: 21.725,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.12010331,
              estimated_diameter_max: 0.2685591655
            },
            meters: {
              estimated_diameter_min: 120.1033100149,
              estimated_diameter_max: 268.5591655159
            },
            miles: {
              estimated_diameter_min: 0.0746287138,
              estimated_diameter_max: 0.1668748772
            },
            feet: {
              estimated_diameter_min: 394.0397436291,
              estimated_diameter_max: 881.0996525913
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 19:03',
              epoch_date_close_approach: 1726599780000,
              relative_velocity: {
                kilometers_per_second: '1.8516896679',
                kilometers_per_hour: '6666.0828044815',
                miles_per_hour: '4142.0446181513'
              },
              miss_distance: {
                astronomical: '0.2756886886',
                lunar: '107.2428998654',
                kilometers: '41242440.597653282',
                miles: '25626864.2538960116'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54466214?api_key=DEMO_KEY'
          },
          id: '54466214',
          neo_reference_id: '54466214',
          name: '(2024 PX5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54466214',
          absolute_magnitude_h: 22.192,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0968623445,
              estimated_diameter_max: 0.2165907867
            },
            meters: {
              estimated_diameter_min: 96.8623444797,
              estimated_diameter_max: 216.5907867166
            },
            miles: {
              estimated_diameter_min: 0.0601874519,
              estimated_diameter_max: 0.1345832337
            },
            feet: {
              estimated_diameter_min: 317.7898542627,
              estimated_diameter_max: 710.5997166912
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 22:27',
              epoch_date_close_approach: 1726612020000,
              relative_velocity: {
                kilometers_per_second: '5.3840796541',
                kilometers_per_hour: '19382.6867548094',
                miles_per_hour: '12043.647778287'
              },
              miss_distance: {
                astronomical: '0.2545179429',
                lunar: '99.0074797881',
                kilometers: '38075342.134621623',
                miles: '23658920.5237314774'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468780?api_key=DEMO_KEY'
          },
          id: '54468780',
          neo_reference_id: '54468780',
          name: '(2024 RJ4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468780',
          absolute_magnitude_h: 25.282,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.023342909,
              estimated_diameter_max: 0.0521963313
            },
            meters: {
              estimated_diameter_min: 23.3429089797,
              estimated_diameter_max: 52.1963312712
            },
            miles: {
              estimated_diameter_min: 0.0145046067,
              estimated_diameter_max: 0.0324332866
            },
            feet: {
              estimated_diameter_min: 76.5843494969,
              estimated_diameter_max: 171.2478114877
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 09:41',
              epoch_date_close_approach: 1726566060000,
              relative_velocity: {
                kilometers_per_second: '9.0833554413',
                kilometers_per_hour: '32700.0795886917',
                miles_per_hour: '20318.5577866513'
              },
              miss_distance: {
                astronomical: '0.0849006559',
                lunar: '33.0263551451',
                kilometers: '12700957.284242933',
                miles: '7892008.8991131554'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468787?api_key=DEMO_KEY'
          },
          id: '54468787',
          neo_reference_id: '54468787',
          name: '(2024 RR4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468787',
          absolute_magnitude_h: 23.727,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0477699709,
              estimated_diameter_max: 0.1068169022
            },
            meters: {
              estimated_diameter_min: 47.769970887,
              estimated_diameter_max: 106.8169021866
            },
            miles: {
              estimated_diameter_min: 0.0296828746,
              estimated_diameter_max: 0.0663729253
            },
            feet: {
              estimated_diameter_min: 156.725631285,
              estimated_diameter_max: 350.4491653699
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-17',
              close_approach_date_full: '2024-Sep-17 09:04',
              epoch_date_close_approach: 1726563840000,
              relative_velocity: {
                kilometers_per_second: '12.4996626673',
                kilometers_per_hour: '44998.7856023124',
                miles_per_hour: '27960.4954205035'
              },
              miss_distance: {
                astronomical: '0.2137507369',
                lunar: '83.1490366541',
                kilometers: '31976654.951170403',
                miles: '19869372.0316334414'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ],
      '2024-09-12': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2359592?api_key=DEMO_KEY'
          },
          id: '2359592',
          neo_reference_id: '2359592',
          name: '359592 (2010 VA1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2359592',
          absolute_magnitude_h: 20.03,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2621530873,
              estimated_diameter_max: 0.5861921237
            },
            meters: {
              estimated_diameter_min: 262.1530872808,
              estimated_diameter_max: 586.1921236712
            },
            miles: {
              estimated_diameter_min: 0.162894326,
              estimated_diameter_max: 0.3642427861
            },
            feet: {
              estimated_diameter_min: 860.0823348743,
              estimated_diameter_max: 1923.2025670256
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 22:45',
              epoch_date_close_approach: 1726181100000,
              relative_velocity: {
                kilometers_per_second: '6.5394058274',
                kilometers_per_hour: '23541.8609785208',
                miles_per_hour: '14627.996895237'
              },
              miss_distance: {
                astronomical: '0.3451306605',
                lunar: '134.2558269345',
                kilometers: '51630811.682493135',
                miles: '32081898.722089863'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3350633?api_key=DEMO_KEY'
          },
          id: '3350633',
          neo_reference_id: '3350633',
          name: '(2006 TU7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3350633',
          absolute_magnitude_h: 21.9,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1108038821,
              estimated_diameter_max: 0.2477650126
            },
            meters: {
              estimated_diameter_min: 110.8038821264,
              estimated_diameter_max: 247.7650126055
            },
            miles: {
              estimated_diameter_min: 0.068850319,
              estimated_diameter_max: 0.1539539936
            },
            feet: {
              estimated_diameter_min: 363.5298086356,
              estimated_diameter_max: 812.8773639568
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 22:51',
              epoch_date_close_approach: 1726181460000,
              relative_velocity: {
                kilometers_per_second: '10.0886975839',
                kilometers_per_hour: '36319.3113020062',
                miles_per_hour: '22567.4076254049'
              },
              miss_distance: {
                astronomical: '0.2426631404',
                lunar: '94.3959616156',
                kilometers: '36301888.931350948',
                miles: '22556947.8023731624'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3609162?api_key=DEMO_KEY'
          },
          id: '3609162',
          neo_reference_id: '3609162',
          name: '(2012 SW49)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3609162',
          absolute_magnitude_h: 22.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1010543415,
              estimated_diameter_max: 0.2259643771
            },
            meters: {
              estimated_diameter_min: 101.054341542,
              estimated_diameter_max: 225.9643771094
            },
            miles: {
              estimated_diameter_min: 0.0627922373,
              estimated_diameter_max: 0.140407711
            },
            feet: {
              estimated_diameter_min: 331.5431259047,
              estimated_diameter_max: 741.3529669956
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 22:41',
              epoch_date_close_approach: 1726180860000,
              relative_velocity: {
                kilometers_per_second: '14.4131851953',
                kilometers_per_hour: '51887.4667030796',
                miles_per_hour: '32240.8539633663'
              },
              miss_distance: {
                astronomical: '0.279785733',
                lunar: '108.836650137',
                kilometers: '41855349.71318871',
                miles: '26007708.318315798'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3647024?api_key=DEMO_KEY'
          },
          id: '3647024',
          neo_reference_id: '3647024',
          name: '(2013 RB6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3647024',
          absolute_magnitude_h: 21.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1214940408,
              estimated_diameter_max: 0.2716689341
            },
            meters: {
              estimated_diameter_min: 121.4940407996,
              estimated_diameter_max: 271.6689340891
            },
            miles: {
              estimated_diameter_min: 0.0754928736,
              estimated_diameter_max: 0.1688071972
            },
            feet: {
              estimated_diameter_min: 398.6025088171,
              estimated_diameter_max: 891.3023057169
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 01:12',
              epoch_date_close_approach: 1726103520000,
              relative_velocity: {
                kilometers_per_second: '12.2330362146',
                kilometers_per_hour: '44038.9303724837',
                miles_per_hour: '27364.0787083913'
              },
              miss_distance: {
                astronomical: '0.256876284',
                lunar: '99.924874476',
                kilometers: '38428144.93991508',
                miles: '23878142.021504904'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3766591?api_key=DEMO_KEY'
          },
          id: '3766591',
          neo_reference_id: '3766591',
          name: '(2017 BU)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3766591',
          absolute_magnitude_h: 25.21,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0241298697,
              estimated_diameter_max: 0.0539560289
            },
            meters: {
              estimated_diameter_min: 24.1298696921,
              estimated_diameter_max: 53.9560289198
            },
            miles: {
              estimated_diameter_min: 0.0149936013,
              estimated_diameter_max: 0.0335267116
            },
            feet: {
              estimated_diameter_min: 79.1662416807,
              estimated_diameter_max: 177.0210979213
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 17:20',
              epoch_date_close_approach: 1726161600000,
              relative_velocity: {
                kilometers_per_second: '17.5343629515',
                kilometers_per_hour: '63123.7066255296',
                miles_per_hour: '39222.6164862909'
              },
              miss_distance: {
                astronomical: '0.3220994959',
                lunar: '125.2967039051',
                kilometers: '48185398.514713733',
                miles: '29941018.2535781954'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54248559?api_key=DEMO_KEY'
          },
          id: '54248559',
          neo_reference_id: '54248559',
          name: '(2022 DA3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54248559',
          absolute_magnitude_h: 27.85,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0071540995,
              estimated_diameter_max: 0.0159970528
            },
            meters: {
              estimated_diameter_min: 7.1540995088,
              estimated_diameter_max: 15.9970528196
            },
            miles: {
              estimated_diameter_min: 0.00444535,
              estimated_diameter_max: 0.0099401047
            },
            feet: {
              estimated_diameter_min: 23.4714558326,
              estimated_diameter_max: 52.4837707725
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 17:07',
              epoch_date_close_approach: 1726160820000,
              relative_velocity: {
                kilometers_per_second: '12.3713023949',
                kilometers_per_hour: '44536.6886215543',
                miles_per_hour: '27673.3663270986'
              },
              miss_distance: {
                astronomical: '0.0912040929',
                lunar: '35.4783921381',
                kilometers: '13643938.033122123',
                miles: '8477949.9660183774'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54248559?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2613569?api_key=DEMO_KEY'
          },
          id: '2613569',
          neo_reference_id: '2613569',
          name: '613569 (2006 TU7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2613569',
          absolute_magnitude_h: 21.91,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1102947845,
              estimated_diameter_max: 0.2466266358
            },
            meters: {
              estimated_diameter_min: 110.2947845322,
              estimated_diameter_max: 246.6266357777
            },
            miles: {
              estimated_diameter_min: 0.0685339806,
              estimated_diameter_max: 0.1532466393
            },
            feet: {
              estimated_diameter_min: 361.8595408847,
              estimated_diameter_max: 809.142531725
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 22:51',
              epoch_date_close_approach: 1726181460000,
              relative_velocity: {
                kilometers_per_second: '10.0886974358',
                kilometers_per_hour: '36319.3107688339',
                miles_per_hour: '22567.4072941124'
              },
              miss_distance: {
                astronomical: '0.2426631294',
                lunar: '94.3959573366',
                kilometers: '36301887.285774378',
                miles: '22556946.7798592964'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54321460?api_key=DEMO_KEY'
          },
          id: '54321460',
          neo_reference_id: '54321460',
          name: '(2022 UA14)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54321460',
          absolute_magnitude_h: 28.34,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0057089334,
              estimated_diameter_max: 0.0127655632
            },
            meters: {
              estimated_diameter_min: 5.7089334002,
              estimated_diameter_max: 12.765563162
            },
            miles: {
              estimated_diameter_min: 0.0035473657,
              estimated_diameter_max: 0.0079321507
            },
            feet: {
              estimated_diameter_min: 18.7300970568,
              estimated_diameter_max: 41.8817702443
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 17:43',
              epoch_date_close_approach: 1726162980000,
              relative_velocity: {
                kilometers_per_second: '9.4676929442',
                kilometers_per_hour: '34083.6945992038',
                miles_per_hour: '21178.282346933'
              },
              miss_distance: {
                astronomical: '0.1556165978',
                lunar: '60.5348565442',
                kilometers: '23279911.567526686',
                miles: '14465466.2754768268'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54340154?api_key=DEMO_KEY'
          },
          id: '54340154',
          neo_reference_id: '54340154',
          name: '(2023 BM4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54340154',
          absolute_magnitude_h: 23.67,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0490405098,
              estimated_diameter_max: 0.1096579137
            },
            meters: {
              estimated_diameter_min: 49.0405098418,
              estimated_diameter_max: 109.6579136575
            },
            miles: {
              estimated_diameter_min: 0.0304723506,
              estimated_diameter_max: 0.0681382475
            },
            feet: {
              estimated_diameter_min: 160.8940663093,
              estimated_diameter_max: 359.770069444
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 23:54',
              epoch_date_close_approach: 1726185240000,
              relative_velocity: {
                kilometers_per_second: '7.4791757983',
                kilometers_per_hour: '26925.0328738687',
                miles_per_hour: '16730.1683432103'
              },
              miss_distance: {
                astronomical: '0.2277681722',
                lunar: '88.6018189858',
                kilometers: '34073633.414913214',
                miles: '21172374.0279977932'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467482?api_key=DEMO_KEY'
          },
          id: '54467482',
          neo_reference_id: '54467482',
          name: '(2024 QS1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467482',
          absolute_magnitude_h: 22.113,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1004511647,
              estimated_diameter_max: 0.2246156327
            },
            meters: {
              estimated_diameter_min: 100.4511646963,
              estimated_diameter_max: 224.6156326799
            },
            miles: {
              estimated_diameter_min: 0.0624174407,
              estimated_diameter_max: 0.1395696403
            },
            feet: {
              estimated_diameter_min: 329.5641991821,
              estimated_diameter_max: 736.9279523215
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 06:03',
              epoch_date_close_approach: 1726120980000,
              relative_velocity: {
                kilometers_per_second: '14.2730304691',
                kilometers_per_hour: '51382.9096886776',
                miles_per_hour: '31927.3418562786'
              },
              miss_distance: {
                astronomical: '0.0309050037',
                lunar: '12.0220464393',
                kilometers: '4623322.725862119',
                miles: '2872799.5283664822'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467539?api_key=DEMO_KEY'
          },
          id: '54467539',
          neo_reference_id: '54467539',
          name: '(2024 QC2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467539',
          absolute_magnitude_h: 21.556,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1298239972,
              estimated_diameter_max: 0.2902952828
            },
            meters: {
              estimated_diameter_min: 129.8239971848,
              estimated_diameter_max: 290.295282816
            },
            miles: {
              estimated_diameter_min: 0.080668867,
              estimated_diameter_max: 0.1803810702
            },
            feet: {
              estimated_diameter_min: 425.9317629238,
              estimated_diameter_max: 952.412375674
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 17:44',
              epoch_date_close_approach: 1726163040000,
              relative_velocity: {
                kilometers_per_second: '11.2733922722',
                kilometers_per_hour: '40584.212180032',
                miles_per_hour: '25217.4511737537'
              },
              miss_distance: {
                astronomical: '0.3919254709',
                lunar: '152.4590081801',
                kilometers: '58631215.645386983',
                miles: '36431748.0394390454'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467606?api_key=DEMO_KEY'
          },
          id: '54467606',
          neo_reference_id: '54467606',
          name: '(2024 RG)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467606',
          absolute_magnitude_h: 24.12,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0398616229,
              estimated_diameter_max: 0.0891332986
            },
            meters: {
              estimated_diameter_min: 39.8616229277,
              estimated_diameter_max: 89.1332985597
            },
            miles: {
              estimated_diameter_min: 0.0247688565,
              estimated_diameter_max: 0.0553848469
            },
            feet: {
              estimated_diameter_min: 130.779606966,
              estimated_diameter_max: 292.4320912466
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 05:24',
              epoch_date_close_approach: 1726118640000,
              relative_velocity: {
                kilometers_per_second: '4.7876148098',
                kilometers_per_hour: '17235.4133151456',
                miles_per_hour: '10709.4155679581'
              },
              miss_distance: {
                astronomical: '0.1396844563',
                lunar: '54.3372535007',
                kilometers: '20896497.134588081',
                miles: '12984481.2210382778'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467613?api_key=DEMO_KEY'
          },
          id: '54467613',
          neo_reference_id: '54467613',
          name: '(2024 RO)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467613',
          absolute_magnitude_h: 25.149,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0248173255,
              estimated_diameter_max: 0.0554932268
            },
            meters: {
              estimated_diameter_min: 24.8173254848,
              estimated_diameter_max: 55.4932268036
            },
            miles: {
              estimated_diameter_min: 0.0154207664,
              estimated_diameter_max: 0.0344818818
            },
            feet: {
              estimated_diameter_min: 81.4216741434,
              estimated_diameter_max: 182.0643982265
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 09:48',
              epoch_date_close_approach: 1726134480000,
              relative_velocity: {
                kilometers_per_second: '7.4983515493',
                kilometers_per_hour: '26994.0655775963',
                miles_per_hour: '16773.0625807014'
              },
              miss_distance: {
                astronomical: '0.0781490885',
                lunar: '30.3999954265',
                kilometers: '11690937.182041495',
                miles: '7264411.509682831'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468276?api_key=DEMO_KEY'
          },
          id: '54468276',
          neo_reference_id: '54468276',
          name: '(2024 RH2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468276',
          absolute_magnitude_h: 25.052,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0259510525,
              estimated_diameter_max: 0.0580283175
            },
            meters: {
              estimated_diameter_min: 25.9510525198,
              estimated_diameter_max: 58.0283175219
            },
            miles: {
              estimated_diameter_min: 0.0161252315,
              estimated_diameter_max: 0.0360571137
            },
            feet: {
              estimated_diameter_min: 85.141251149,
              estimated_diameter_max: 190.3816252584
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 04:09',
              epoch_date_close_approach: 1726114140000,
              relative_velocity: {
                kilometers_per_second: '4.226633452',
                kilometers_per_hour: '15215.8804273572',
                miles_per_hour: '9454.5563688765'
              },
              miss_distance: {
                astronomical: '0.0199954521',
                lunar: '7.7782308669',
                kilometers: '2991277.043847027',
                miles: '1858693.3662898926'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468524?api_key=DEMO_KEY'
          },
          id: '54468524',
          neo_reference_id: '54468524',
          name: '(2024 RF3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468524',
          absolute_magnitude_h: 27.283,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0092887009,
              estimated_diameter_max: 0.0207701665
            },
            meters: {
              estimated_diameter_min: 9.2887008565,
              estimated_diameter_max: 20.7701665377
            },
            miles: {
              estimated_diameter_min: 0.0057717293,
              estimated_diameter_max: 0.0129059792
            },
            feet: {
              estimated_diameter_min: 30.4747413179,
              estimated_diameter_max: 68.1435931836
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 08:04',
              epoch_date_close_approach: 1726128240000,
              relative_velocity: {
                kilometers_per_second: '6.4778353331',
                kilometers_per_hour: '23320.2071992899',
                miles_per_hour: '14490.2698566921'
              },
              miss_distance: {
                astronomical: '0.0120766992',
                lunar: '4.6978359888',
                kilometers: '1806648.476950704',
                miles: '1122599.3079555552'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468782?api_key=DEMO_KEY'
          },
          id: '54468782',
          neo_reference_id: '54468782',
          name: '(2024 RL4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468782',
          absolute_magnitude_h: 25.857,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0179124494,
              estimated_diameter_max: 0.0400534545
            },
            meters: {
              estimated_diameter_min: 17.9124494007,
              estimated_diameter_max: 40.0534545035
            },
            miles: {
              estimated_diameter_min: 0.0111302766,
              estimated_diameter_max: 0.0248880551
            },
            feet: {
              estimated_diameter_min: 58.7678804918,
              estimated_diameter_max: 131.4089756732
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 18:07',
              epoch_date_close_approach: 1726164420000,
              relative_velocity: {
                kilometers_per_second: '16.7992737803',
                kilometers_per_hour: '60477.3856091545',
                miles_per_hour: '37578.2955191994'
              },
              miss_distance: {
                astronomical: '0.0322029446',
                lunar: '12.5269454494',
                kilometers: '4817491.919888002',
                miles: '2993450.6708663476'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469015?api_key=DEMO_KEY'
          },
          id: '54469015',
          neo_reference_id: '54469015',
          name: '(2024 RL5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469015',
          absolute_magnitude_h: 22.493,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0843247334,
              estimated_diameter_max: 0.188555836
            },
            meters: {
              estimated_diameter_min: 84.3247333618,
              estimated_diameter_max: 188.5558359815
            },
            miles: {
              estimated_diameter_min: 0.0523969439,
              estimated_diameter_max: 0.1171631284
            },
            feet: {
              estimated_diameter_min: 276.6559582027,
              estimated_diameter_max: 618.6215289215
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 13:26',
              epoch_date_close_approach: 1726147560000,
              relative_velocity: {
                kilometers_per_second: '3.5285417102',
                kilometers_per_hour: '12702.7501568341',
                miles_per_hour: '7892.9949516173'
              },
              miss_distance: {
                astronomical: '0.3287748819',
                lunar: '127.8934290591',
                kilometers: '49184022.041741553',
                miles: '30561534.1395693114'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469021?api_key=DEMO_KEY'
          },
          id: '54469021',
          neo_reference_id: '54469021',
          name: '(2024 RY5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469021',
          absolute_magnitude_h: 24.106,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0401194506,
              estimated_diameter_max: 0.0897098187
            },
            meters: {
              estimated_diameter_min: 40.1194505531,
              estimated_diameter_max: 89.7098186566
            },
            miles: {
              estimated_diameter_min: 0.0249290631,
              estimated_diameter_max: 0.0557430797
            },
            feet: {
              estimated_diameter_min: 131.6254981526,
              estimated_diameter_max: 294.3235614415
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-12',
              close_approach_date_full: '2024-Sep-12 10:43',
              epoch_date_close_approach: 1726137780000,
              relative_velocity: {
                kilometers_per_second: '5.5401638983',
                kilometers_per_hour: '19944.5900338318',
                miles_per_hour: '12392.7926240773'
              },
              miss_distance: {
                astronomical: '0.1678465652',
                lunar: '65.2923138628',
                kilometers: '25109488.640736124',
                miles: '15602312.7524975512'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ],
      '2024-09-13': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3160723?api_key=DEMO_KEY'
          },
          id: '3160723',
          neo_reference_id: '3160723',
          name: '(2003 RU11)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3160723',
          absolute_magnitude_h: 25.5,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0211132445,
              estimated_diameter_max: 0.0472106499
            },
            meters: {
              estimated_diameter_min: 21.113244479,
              estimated_diameter_max: 47.2106498806
            },
            miles: {
              estimated_diameter_min: 0.0131191578,
              estimated_diameter_max: 0.0293353287
            },
            feet: {
              estimated_diameter_min: 69.2691770164,
              estimated_diameter_max: 154.8905885541
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 00:49',
              epoch_date_close_approach: 1726188540000,
              relative_velocity: {
                kilometers_per_second: '13.1944719803',
                kilometers_per_hour: '47500.0991291254',
                miles_per_hour: '29514.7143727613'
              },
              miss_distance: {
                astronomical: '0.2982470379',
                lunar: '116.0180977431',
                kilometers: '44617121.603649273',
                miles: '27723793.7951070474'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3345307?api_key=DEMO_KEY'
          },
          id: '3345307',
          neo_reference_id: '3345307',
          name: '(2006 SK134)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3345307',
          absolute_magnitude_h: 18.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.4836764882,
              estimated_diameter_max: 1.0815335068
            },
            meters: {
              estimated_diameter_min: 483.6764882185,
              estimated_diameter_max: 1081.533506775
            },
            miles: {
              estimated_diameter_min: 0.3005425432,
              estimated_diameter_max: 0.6720335566
            },
            feet: {
              estimated_diameter_min: 1586.8651696069,
              estimated_diameter_max: 3548.3383903678
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 11:53',
              epoch_date_close_approach: 1726228380000,
              relative_velocity: {
                kilometers_per_second: '26.8118738555',
                kilometers_per_hour: '96522.7458797618',
                miles_per_hour: '59975.4806273442'
              },
              miss_distance: {
                astronomical: '0.4447325108',
                lunar: '173.0009467012',
                kilometers: '66531036.335431996',
                miles: '41340468.9958177048'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3781467?api_key=DEMO_KEY'
          },
          id: '3781467',
          neo_reference_id: '3781467',
          name: '(2017 RY15)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3781467',
          absolute_magnitude_h: 22.73,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0756057762,
              estimated_diameter_max: 0.1690596552
            },
            meters: {
              estimated_diameter_min: 75.605776236,
              estimated_diameter_max: 169.0596551553
            },
            miles: {
              estimated_diameter_min: 0.0469792368,
              estimated_diameter_max: 0.105048767
            },
            feet: {
              estimated_diameter_min: 248.050454906,
              estimated_diameter_max: 554.6576790196
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 15:05',
              epoch_date_close_approach: 1726239900000,
              relative_velocity: {
                kilometers_per_second: '8.7267284784',
                kilometers_per_hour: '31416.2225221749',
                miles_per_hour: '19520.8189332925'
              },
              miss_distance: {
                astronomical: '0.2280423183',
                lunar: '88.7084618187',
                kilometers: '34114645.087542021',
                miles: '21197857.4996850498'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3836275?api_key=DEMO_KEY'
          },
          id: '3836275',
          neo_reference_id: '3836275',
          name: '(2018 WK)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3836275',
          absolute_magnitude_h: 27.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0101054342,
              estimated_diameter_max: 0.0225964377
            },
            meters: {
              estimated_diameter_min: 10.1054341542,
              estimated_diameter_max: 22.5964377109
            },
            miles: {
              estimated_diameter_min: 0.0062792237,
              estimated_diameter_max: 0.0140407711
            },
            feet: {
              estimated_diameter_min: 33.1543125905,
              estimated_diameter_max: 74.1352966996
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 06:33',
              epoch_date_close_approach: 1726209180000,
              relative_velocity: {
                kilometers_per_second: '7.9825111492',
                kilometers_per_hour: '28737.0401370081',
                miles_per_hour: '17856.079189576'
              },
              miss_distance: {
                astronomical: '0.3081655904',
                lunar: '119.8764146656',
                kilometers: '46100915.931132448',
                miles: '28645780.8370978624'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3837806?api_key=DEMO_KEY'
          },
          id: '3837806',
          neo_reference_id: '3837806',
          name: '(2019 AV9)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3837806',
          absolute_magnitude_h: 20.7,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1925550782,
              estimated_diameter_max: 0.4305662442
            },
            meters: {
              estimated_diameter_min: 192.5550781879,
              estimated_diameter_max: 430.566244241
            },
            miles: {
              estimated_diameter_min: 0.1196481415,
              estimated_diameter_max: 0.2675413778
            },
            feet: {
              estimated_diameter_min: 631.7424027221,
              estimated_diameter_max: 1412.6189567557
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 15:32',
              epoch_date_close_approach: 1726241520000,
              relative_velocity: {
                kilometers_per_second: '33.6733313954',
                kilometers_per_hour: '121223.993023341',
                miles_per_hour: '75323.8749983087'
              },
              miss_distance: {
                astronomical: '0.4281909201',
                lunar: '166.5662679189',
                kilometers: '64056449.600300187',
                miles: '39802832.0997771006'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54153123?api_key=DEMO_KEY'
          },
          id: '54153123',
          neo_reference_id: '54153123',
          name: '(2021 LH)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54153123',
          absolute_magnitude_h: 24.71,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0303777061,
              estimated_diameter_max: 0.0679266159
            },
            meters: {
              estimated_diameter_min: 30.3777061387,
              estimated_diameter_max: 67.9266159267
            },
            miles: {
              estimated_diameter_min: 0.0188758256,
              estimated_diameter_max: 0.0422076293
            },
            feet: {
              estimated_diameter_min: 99.6643934081,
              estimated_diameter_max: 222.8563585969
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 15:12',
              epoch_date_close_approach: 1726240320000,
              relative_velocity: {
                kilometers_per_second: '6.1231646475',
                kilometers_per_hour: '22043.3927308633',
                miles_per_hour: '13696.9069999078'
              },
              miss_distance: {
                astronomical: '0.4373746876',
                lunar: '170.1387534764',
                kilometers: '65430321.656875412',
                miles: '40656516.6098562056'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54179001?api_key=DEMO_KEY'
          },
          id: '54179001',
          neo_reference_id: '54179001',
          name: '(2021 PT3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54179001',
          absolute_magnitude_h: 25.66,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0196134944,
              estimated_diameter_max: 0.0438571068
            },
            meters: {
              estimated_diameter_min: 19.6134944368,
              estimated_diameter_max: 43.8571068371
            },
            miles: {
              estimated_diameter_min: 0.0121872567,
              estimated_diameter_max: 0.0272515343
            },
            feet: {
              estimated_diameter_min: 64.3487370881,
              estimated_diameter_max: 143.8881503953
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 07:15',
              epoch_date_close_approach: 1726211700000,
              relative_velocity: {
                kilometers_per_second: '4.8221983034',
                kilometers_per_hour: '17359.9138923414',
                miles_per_hour: '10786.7753849385'
              },
              miss_distance: {
                astronomical: '0.365702017',
                lunar: '142.258084613',
                kilometers: '54708242.79790379',
                miles: '33994125.746060702'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54222544?api_key=DEMO_KEY'
          },
          id: '54222544',
          neo_reference_id: '54222544',
          name: '(2021 WK)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54222544',
          absolute_magnitude_h: 26.39,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0140137697,
              estimated_diameter_max: 0.0313357417
            },
            meters: {
              estimated_diameter_min: 14.0137697166,
              estimated_diameter_max: 31.3357417074
            },
            miles: {
              estimated_diameter_min: 0.0087077501,
              estimated_diameter_max: 0.0194711212
            },
            feet: {
              estimated_diameter_min: 45.9769362371,
              estimated_diameter_max: 102.8075548233
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 18:20',
              epoch_date_close_approach: 1726251600000,
              relative_velocity: {
                kilometers_per_second: '9.2388047128',
                kilometers_per_hour: '33259.6969659712',
                miles_per_hour: '20666.2822619947'
              },
              miss_distance: {
                astronomical: '0.2222985474',
                lunar: '86.4741349386',
                kilometers: '33255389.195134038',
                miles: '20663940.6461962044'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54248454?api_key=DEMO_KEY'
          },
          id: '54248454',
          neo_reference_id: '54248454',
          name: '(2022 DW1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54248454',
          absolute_magnitude_h: 25.26,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0235806068,
              estimated_diameter_max: 0.0527278398
            },
            meters: {
              estimated_diameter_min: 23.5806068,
              estimated_diameter_max: 52.7278397554
            },
            miles: {
              estimated_diameter_min: 0.0146523052,
              estimated_diameter_max: 0.0327635505
            },
            feet: {
              estimated_diameter_min: 77.3641980136,
              estimated_diameter_max: 172.9916057832
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 07:00',
              epoch_date_close_approach: 1726210800000,
              relative_velocity: {
                kilometers_per_second: '18.3478690975',
                kilometers_per_hour: '66052.3287508916',
                miles_per_hour: '41042.3483841304'
              },
              miss_distance: {
                astronomical: '0.4050655547',
                lunar: '157.5705007783',
                kilometers: '60596944.193488489',
                miles: '37653195.1199755882'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2613512?api_key=DEMO_KEY'
          },
          id: '2613512',
          neo_reference_id: '2613512',
          name: '613512 (2006 SK134)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2613512',
          absolute_magnitude_h: 18.73,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.477040198,
              estimated_diameter_max: 1.0666943108
            },
            meters: {
              estimated_diameter_min: 477.0401980121,
              estimated_diameter_max: 1066.694310755
            },
            miles: {
              estimated_diameter_min: 0.2964189449,
              estimated_diameter_max: 0.6628129106
            },
            feet: {
              estimated_diameter_min: 1565.092563246,
              estimated_diameter_max: 3499.6533624974
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 11:53',
              epoch_date_close_approach: 1726228380000,
              relative_velocity: {
                kilometers_per_second: '26.8118739615',
                kilometers_per_hour: '96522.7462612949',
                miles_per_hour: '59975.480864414'
              },
              miss_distance: {
                astronomical: '0.4447325216',
                lunar: '173.0009509024',
                kilometers: '66531037.951088992',
                miles: '41340469.9997404096'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54276248?api_key=DEMO_KEY'
          },
          id: '54276248',
          neo_reference_id: '54276248',
          name: '(2022 HY)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54276248',
          absolute_magnitude_h: 21.16,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1557955241,
              estimated_diameter_max: 0.3483693825
            },
            meters: {
              estimated_diameter_min: 155.7955241278,
              estimated_diameter_max: 348.36938254
            },
            miles: {
              estimated_diameter_min: 0.0968068206,
              estimated_diameter_max: 0.2164666316
            },
            feet: {
              estimated_diameter_min: 511.1401873795,
              estimated_diameter_max: 1142.9442050126
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 01:00',
              epoch_date_close_approach: 1726189200000,
              relative_velocity: {
                kilometers_per_second: '32.6014752206',
                kilometers_per_hour: '117365.3107940488',
                miles_per_hour: '72926.239920891'
              },
              miss_distance: {
                astronomical: '0.3766131249',
                lunar: '146.5025055861',
                kilometers: '56340521.299083963',
                miles: '35008376.5752581694'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54277080?api_key=DEMO_KEY'
          },
          id: '54277080',
          neo_reference_id: '54277080',
          name: '(2022 HC4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54277080',
          absolute_magnitude_h: 27.42,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0087207729,
              estimated_diameter_max: 0.019500241
            },
            meters: {
              estimated_diameter_min: 8.7207728909,
              estimated_diameter_max: 19.5002410005
            },
            miles: {
              estimated_diameter_min: 0.0054188354,
              estimated_diameter_max: 0.0121168843
            },
            feet: {
              estimated_diameter_min: 28.6114605315,
              estimated_diameter_max: 63.9771706841
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 18:02',
              epoch_date_close_approach: 1726250520000,
              relative_velocity: {
                kilometers_per_second: '19.2490129379',
                kilometers_per_hour: '69296.4465764202',
                miles_per_hour: '43058.1170407762'
              },
              miss_distance: {
                astronomical: '0.2712215099',
                lunar: '105.5051673511',
                kilometers: '40574160.179223913',
                miles: '25211614.0572914794'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54308062?api_key=DEMO_KEY'
          },
          id: '54308062',
          neo_reference_id: '54308062',
          name: '(2022 SY11)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54308062',
          absolute_magnitude_h: 24.42,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0347180222,
              estimated_diameter_max: 0.0776318577
            },
            meters: {
              estimated_diameter_min: 34.7180222065,
              estimated_diameter_max: 77.6318576982
            },
            miles: {
              estimated_diameter_min: 0.0215727722,
              estimated_diameter_max: 0.048238185
            },
            feet: {
              estimated_diameter_min: 113.9042759761,
              estimated_diameter_max: 254.6977040105
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 15:29',
              epoch_date_close_approach: 1726241340000,
              relative_velocity: {
                kilometers_per_second: '16.970560099',
                kilometers_per_hour: '61094.0163562884',
                miles_per_hour: '37961.4458853838'
              },
              miss_distance: {
                astronomical: '0.2529536931',
                lunar: '98.3989866159',
                kilometers: '37841333.696393697',
                miles: '23513514.4227871386'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54383282?api_key=DEMO_KEY'
          },
          id: '54383282',
          neo_reference_id: '54383282',
          name: '(2023 RA10)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54383282',
          absolute_magnitude_h: 28.8,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0046190746,
              estimated_diameter_max: 0.0103285648
            },
            meters: {
              estimated_diameter_min: 4.6190746028,
              estimated_diameter_max: 10.328564805
            },
            miles: {
              estimated_diameter_min: 0.002870159,
              estimated_diameter_max: 0.0064178706
            },
            feet: {
              estimated_diameter_min: 15.1544447199,
              estimated_diameter_max: 33.886368555
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 22:24',
              epoch_date_close_approach: 1726266240000,
              relative_velocity: {
                kilometers_per_second: '4.7565831607',
                kilometers_per_hour: '17123.6993786099',
                miles_per_hour: '10640.0008722257'
              },
              miss_distance: {
                astronomical: '0.0575028934',
                lunar: '22.3686255326',
                kilometers: '8602310.371477058',
                miles: '5345227.8033290804'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54404089?api_key=DEMO_KEY'
          },
          id: '54404089',
          neo_reference_id: '54404089',
          name: '(2023 VU5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54404089',
          absolute_magnitude_h: 21.69,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1220548318,
              estimated_diameter_max: 0.2729229009
            },
            meters: {
              estimated_diameter_min: 122.054831812,
              estimated_diameter_max: 272.922900914
            },
            miles: {
              estimated_diameter_min: 0.0758413329,
              estimated_diameter_max: 0.1695863759
            },
            feet: {
              estimated_diameter_min: 400.4423744022,
              estimated_diameter_max: 895.4163702348
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 04:59',
              epoch_date_close_approach: 1726203540000,
              relative_velocity: {
                kilometers_per_second: '8.5314170224',
                kilometers_per_hour: '30713.101280487',
                miles_per_hour: '19083.9267373115'
              },
              miss_distance: {
                astronomical: '0.4412777119',
                lunar: '171.6570299291',
                kilometers: '66014205.778713653',
                miles: '41019325.3795002914'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467175?api_key=DEMO_KEY'
          },
          id: '54467175',
          neo_reference_id: '54467175',
          name: '(2024 QB1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467175',
          absolute_magnitude_h: 23.288,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0584729462,
              estimated_diameter_max: 0.1307494825
            },
            meters: {
              estimated_diameter_min: 58.4729461985,
              estimated_diameter_max: 130.7494825446
            },
            miles: {
              estimated_diameter_min: 0.0363333931,
              estimated_diameter_max: 0.0812439367
            },
            feet: {
              estimated_diameter_min: 191.840380806,
              estimated_diameter_max: 428.9681323116
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 09:57',
              epoch_date_close_approach: 1726221420000,
              relative_velocity: {
                kilometers_per_second: '16.2341848189',
                kilometers_per_hour: '58443.0653481008',
                miles_per_hour: '36314.2480214352'
              },
              miss_distance: {
                astronomical: '0.135865092',
                lunar: '52.851520788',
                kilometers: '20325128.37055404',
                miles: '12629449.134124152'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468776?api_key=DEMO_KEY'
          },
          id: '54468776',
          neo_reference_id: '54468776',
          name: '(2024 RE4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468776',
          absolute_magnitude_h: 24.36,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0356906927,
              estimated_diameter_max: 0.079806815
            },
            meters: {
              estimated_diameter_min: 35.690692667,
              estimated_diameter_max: 79.8068149676
            },
            miles: {
              estimated_diameter_min: 0.0221771614,
              estimated_diameter_max: 0.0495896404
            },
            feet: {
              estimated_diameter_min: 117.0954521297,
              estimated_diameter_max: 261.8333908182
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 00:53',
              epoch_date_close_approach: 1726188780000,
              relative_velocity: {
                kilometers_per_second: '12.1764931748',
                kilometers_per_hour: '43835.3754291256',
                miles_per_hour: '27237.5975826142'
              },
              miss_distance: {
                astronomical: '0.1063409501',
                lunar: '41.3666295889',
                kilometers: '15908379.628736287',
                miles: '9885008.7273512806'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469023?api_key=DEMO_KEY'
          },
          id: '54469023',
          neo_reference_id: '54469023',
          name: '(2024 RA6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469023',
          absolute_magnitude_h: 21.127,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1581812403,
              estimated_diameter_max: 0.3537040061
            },
            meters: {
              estimated_diameter_min: 158.1812403302,
              estimated_diameter_max: 353.7040061435
            },
            miles: {
              estimated_diameter_min: 0.0982892355,
              estimated_diameter_max: 0.219781412
            },
            feet: {
              estimated_diameter_min: 518.9673405248,
              estimated_diameter_max: 1160.4462515157
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 21:25',
              epoch_date_close_approach: 1726262700000,
              relative_velocity: {
                kilometers_per_second: '11.635464364',
                kilometers_per_hour: '41887.6717102276',
                miles_per_hour: '26027.3702357245'
              },
              miss_distance: {
                astronomical: '0.4540431747',
                lunar: '176.6227949583',
                kilometers: '67923891.823157889',
                miles: '42205949.2630373082'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469029?api_key=DEMO_KEY'
          },
          id: '54469029',
          neo_reference_id: '54469029',
          name: '(2024 RD7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469029',
          absolute_magnitude_h: 22.449,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0860508128,
              estimated_diameter_max: 0.1924154668
            },
            meters: {
              estimated_diameter_min: 86.0508127524,
              estimated_diameter_max: 192.4154668334
            },
            miles: {
              estimated_diameter_min: 0.0534694796,
              estimated_diameter_max: 0.119561391
            },
            feet: {
              estimated_diameter_min: 282.3189485105,
              estimated_diameter_max: 631.2843602058
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 00:44',
              epoch_date_close_approach: 1726188240000,
              relative_velocity: {
                kilometers_per_second: '19.3859250814',
                kilometers_per_hour: '69789.3302929748',
                miles_per_hour: '43364.3758145432'
              },
              miss_distance: {
                astronomical: '0.2309259636',
                lunar: '89.8301998404',
                kilometers: '34546032.282257532',
                miles: '21465909.0727646616'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469034?api_key=DEMO_KEY'
          },
          id: '54469034',
          neo_reference_id: '54469034',
          name: '(2024 RM7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469034',
          absolute_magnitude_h: 24.898,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0278583235,
              estimated_diameter_max: 0.062293105
            },
            meters: {
              estimated_diameter_min: 27.8583234588,
              estimated_diameter_max: 62.293104993
            },
            miles: {
              estimated_diameter_min: 0.0173103543,
              estimated_diameter_max: 0.0387071289
            },
            feet: {
              estimated_diameter_min: 91.3987019365,
              estimated_diameter_max: 204.3737105853
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-13',
              close_approach_date_full: '2024-Sep-13 02:18',
              epoch_date_close_approach: 1726193880000,
              relative_velocity: {
                kilometers_per_second: '5.6981208284',
                kilometers_per_hour: '20513.2349820867',
                miles_per_hour: '12746.1264809527'
              },
              miss_distance: {
                astronomical: '0.0963152927',
                lunar: '37.4666488603',
                kilometers: '14408562.636346549',
                miles: '8953065.6630544162'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ],
      '2024-09-14': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2396593?api_key=DEMO_KEY'
          },
          id: '2396593',
          neo_reference_id: '2396593',
          name: '396593 (2001 HC)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2396593',
          absolute_magnitude_h: 19.07,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.407901194,
              estimated_diameter_max: 0.912094798
            },
            meters: {
              estimated_diameter_min: 407.9011940281,
              estimated_diameter_max: 912.0947979501
            },
            miles: {
              estimated_diameter_min: 0.2534579728,
              estimated_diameter_max: 0.5667492567
            },
            feet: {
              estimated_diameter_min: 1338.258553415,
              estimated_diameter_max: 2992.4370969065
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 02:56',
              epoch_date_close_approach: 1726282560000,
              relative_velocity: {
                kilometers_per_second: '20.8787302709',
                kilometers_per_hour: '75163.4289752054',
                miles_per_hour: '46703.6317429547'
              },
              miss_distance: {
                astronomical: '0.4841030274',
                lunar: '188.3160776586',
                kilometers: '72420781.759591638',
                miles: '45000187.0990070844'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3605257?api_key=DEMO_KEY'
          },
          id: '3605257',
          neo_reference_id: '3605257',
          name: '(2012 KT42)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3605257',
          absolute_magnitude_h: 29,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0042126461,
              estimated_diameter_max: 0.0094197631
            },
            meters: {
              estimated_diameter_min: 4.2126461056,
              estimated_diameter_max: 9.4197630572
            },
            miles: {
              estimated_diameter_min: 0.0026176161,
              estimated_diameter_max: 0.0058531676
            },
            feet: {
              estimated_diameter_min: 13.821017849,
              estimated_diameter_max: 30.9047354285
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 08:15',
              epoch_date_close_approach: 1726301700000,
              relative_velocity: {
                kilometers_per_second: '13.5334978097',
                kilometers_per_hour: '48720.5921149798',
                miles_per_hour: '30273.0812505551'
              },
              miss_distance: {
                astronomical: '0.2772622072',
                lunar: '107.8549986008',
                kilometers: '41477835.628618664',
                miles: '25773131.9436150032'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/3605257?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3739011?api_key=DEMO_KEY'
          },
          id: '3739011',
          neo_reference_id: '3739011',
          name: '(2015 YU7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3739011',
          absolute_magnitude_h: 21.37,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1414343753,
              estimated_diameter_max: 0.3162568776
            },
            meters: {
              estimated_diameter_min: 141.4343753131,
              estimated_diameter_max: 316.2568775553
            },
            miles: {
              estimated_diameter_min: 0.0878832192,
              estimated_diameter_max: 0.1965128523
            },
            feet: {
              estimated_diameter_min: 464.0235559023,
              estimated_diameter_max: 1037.5882141587
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 09:54',
              epoch_date_close_approach: 1726307640000,
              relative_velocity: {
                kilometers_per_second: '15.0894050685',
                kilometers_per_hour: '54321.858246722',
                miles_per_hour: '33753.4901978035'
              },
              miss_distance: {
                astronomical: '0.4657985126',
                lunar: '181.1956214014',
                kilometers: '69682465.334128162',
                miles: '43298676.1723341556'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3797422?api_key=DEMO_KEY'
          },
          id: '3797422',
          neo_reference_id: '3797422',
          name: '(2018 AG1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3797422',
          absolute_magnitude_h: 22.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1010543415,
              estimated_diameter_max: 0.2259643771
            },
            meters: {
              estimated_diameter_min: 101.054341542,
              estimated_diameter_max: 225.9643771094
            },
            miles: {
              estimated_diameter_min: 0.0627922373,
              estimated_diameter_max: 0.140407711
            },
            feet: {
              estimated_diameter_min: 331.5431259047,
              estimated_diameter_max: 741.3529669956
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 08:53',
              epoch_date_close_approach: 1726303980000,
              relative_velocity: {
                kilometers_per_second: '17.5732242822',
                kilometers_per_hour: '63263.6074158624',
                miles_per_hour: '39309.5453968174'
              },
              miss_distance: {
                astronomical: '0.371054142',
                lunar: '144.340061238',
                kilometers: '55508909.29787754',
                miles: '34491636.839248452'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3968757?api_key=DEMO_KEY'
          },
          id: '3968757',
          neo_reference_id: '3968757',
          name: '(2019 YD5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3968757',
          absolute_magnitude_h: 25.9,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0175612318,
              estimated_diameter_max: 0.0392681082
            },
            meters: {
              estimated_diameter_min: 17.561231848,
              estimated_diameter_max: 39.2681081809
            },
            miles: {
              estimated_diameter_min: 0.0109120402,
              estimated_diameter_max: 0.0244000636
            },
            feet: {
              estimated_diameter_min: 57.6155918963,
              estimated_diameter_max: 128.8323800441
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 06:52',
              epoch_date_close_approach: 1726296720000,
              relative_velocity: {
                kilometers_per_second: '6.0206276006',
                kilometers_per_hour: '21674.2593620575',
                miles_per_hour: '13467.5418797184'
              },
              miss_distance: {
                astronomical: '0.4679064589',
                lunar: '182.0156125121',
                kilometers: '69997809.610682543',
                miles: '43494622.0196553734'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54048892?api_key=DEMO_KEY'
          },
          id: '54048892',
          neo_reference_id: '54048892',
          name: '(2020 OM1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54048892',
          absolute_magnitude_h: 20.9,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1756123185,
              estimated_diameter_max: 0.3926810818
            },
            meters: {
              estimated_diameter_min: 175.6123184804,
              estimated_diameter_max: 392.6810818086
            },
            miles: {
              estimated_diameter_min: 0.1091204019,
              estimated_diameter_max: 0.2440006365
            },
            feet: {
              estimated_diameter_min: 576.1559189633,
              estimated_diameter_max: 1288.3238004408
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 10:35',
              epoch_date_close_approach: 1726310100000,
              relative_velocity: {
                kilometers_per_second: '11.0245941189',
                kilometers_per_hour: '39688.538827977',
                miles_per_hour: '24660.9145845283'
              },
              miss_distance: {
                astronomical: '0.4543905879',
                lunar: '176.7579386931',
                kilometers: '67975864.097887773',
                miles: '42238243.3370583474'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54051132?api_key=DEMO_KEY'
          },
          id: '54051132',
          neo_reference_id: '54051132',
          name: '(2020 OT7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54051132',
          absolute_magnitude_h: 24.09,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0404161533,
              estimated_diameter_max: 0.0903732663
            },
            meters: {
              estimated_diameter_min: 40.4161533403,
              estimated_diameter_max: 90.3732662579
            },
            miles: {
              estimated_diameter_min: 0.0251134256,
              estimated_diameter_max: 0.0561553268
            },
            feet: {
              estimated_diameter_min: 132.598932525,
              estimated_diameter_max: 296.5002268697
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 02:29',
              epoch_date_close_approach: 1726280940000,
              relative_velocity: {
                kilometers_per_second: '20.3067803903',
                kilometers_per_hour: '73104.4094050904',
                miles_per_hour: '45424.2370550686'
              },
              miss_distance: {
                astronomical: '0.3615580113',
                lunar: '140.6460663957',
                kilometers: '54088308.371915931',
                miles: '33608916.3561486078'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54193840?api_key=DEMO_KEY'
          },
          id: '54193840',
          neo_reference_id: '54193840',
          name: '(2021 RV4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54193840',
          absolute_magnitude_h: 25.24,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0237987955,
              estimated_diameter_max: 0.0532157244
            },
            meters: {
              estimated_diameter_min: 23.7987954683,
              estimated_diameter_max: 53.2157244498
            },
            miles: {
              estimated_diameter_min: 0.0147878813,
              estimated_diameter_max: 0.0330667079
            },
            feet: {
              estimated_diameter_min: 78.0800401242,
              estimated_diameter_max: 174.5922774037
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 23:52',
              epoch_date_close_approach: 1726357920000,
              relative_velocity: {
                kilometers_per_second: '9.0031914037',
                kilometers_per_hour: '32411.4890531458',
                miles_per_hour: '20139.2388508283'
              },
              miss_distance: {
                astronomical: '0.1897324375',
                lunar: '73.8059181875',
                kilometers: '28383568.519908125',
                miles: '17636731.652157125'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54280032?api_key=DEMO_KEY'
          },
          id: '54280032',
          neo_reference_id: '54280032',
          name: '(2022 KO1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54280032',
          absolute_magnitude_h: 22.22,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0956213733,
              estimated_diameter_max: 0.2138158908
            },
            meters: {
              estimated_diameter_min: 95.6213732844,
              estimated_diameter_max: 213.8158907658
            },
            miles: {
              estimated_diameter_min: 0.0594163483,
              estimated_diameter_max: 0.1328589939
            },
            feet: {
              estimated_diameter_min: 313.7184263264,
              estimated_diameter_max: 701.49572706
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 15:14',
              epoch_date_close_approach: 1726326840000,
              relative_velocity: {
                kilometers_per_second: '8.7397671727',
                kilometers_per_hour: '31463.1618216382',
                miles_per_hour: '19549.9851885618'
              },
              miss_distance: {
                astronomical: '0.2596400236',
                lunar: '100.9999691804',
                kilometers: '38841594.497309732',
                miles: '24135047.6635970216'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54433741?api_key=DEMO_KEY'
          },
          id: '54433741',
          neo_reference_id: '54433741',
          name: '(2024 GE4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54433741',
          absolute_magnitude_h: 24.67,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0309424699,
              estimated_diameter_max: 0.069189466
            },
            meters: {
              estimated_diameter_min: 30.9424698617,
              estimated_diameter_max: 69.1894660026
            },
            miles: {
              estimated_diameter_min: 0.0192267534,
              estimated_diameter_max: 0.0429923277
            },
            feet: {
              estimated_diameter_min: 101.5172928212,
              estimated_diameter_max: 226.9995676399
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 00:05',
              epoch_date_close_approach: 1726272300000,
              relative_velocity: {
                kilometers_per_second: '5.2503970555',
                kilometers_per_hour: '18901.4293999271',
                miles_per_hour: '11744.6131735269'
              },
              miss_distance: {
                astronomical: '0.4191684653',
                lunar: '163.0565330017',
                kilometers: '62706709.580048911',
                miles: '38964142.5417445318'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54467563?api_key=DEMO_KEY'
          },
          id: '54467563',
          neo_reference_id: '54467563',
          name: '(2024 QG2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467563',
          absolute_magnitude_h: 22.577,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0811250498,
              estimated_diameter_max: 0.1814011261
            },
            meters: {
              estimated_diameter_min: 81.1250498372,
              estimated_diameter_max: 181.401126114
            },
            miles: {
              estimated_diameter_min: 0.0504087533,
              estimated_diameter_max: 0.1127173991
            },
            feet: {
              estimated_diameter_min: 266.1583085079,
              estimated_diameter_max: 595.1480705999
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 18:06',
              epoch_date_close_approach: 1726337160000,
              relative_velocity: {
                kilometers_per_second: '10.3139934494',
                kilometers_per_hour: '37130.3764178332',
                miles_per_hour: '23071.3719469586'
              },
              miss_distance: {
                astronomical: '0.2163370178',
                lunar: '84.1550999242',
                kilometers: '32363557.065032086',
                miles: '20109781.8572353468'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54470174?api_key=DEMO_KEY'
          },
          id: '54470174',
          neo_reference_id: '54470174',
          name: '(2024 RL10)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54470174',
          absolute_magnitude_h: 27.375,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0089033814,
              estimated_diameter_max: 0.019908566
            },
            meters: {
              estimated_diameter_min: 8.9033813728,
              estimated_diameter_max: 19.9085659792
            },
            miles: {
              estimated_diameter_min: 0.005532303,
              estimated_diameter_max: 0.0123706056
            },
            feet: {
              estimated_diameter_min: 29.2105697432,
              estimated_diameter_max: 65.3168196073
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-14',
              close_approach_date_full: '2024-Sep-14 00:25',
              epoch_date_close_approach: 1726273500000,
              relative_velocity: {
                kilometers_per_second: '5.7227350939',
                kilometers_per_hour: '20601.8463381286',
                miles_per_hour: '12801.1861316'
              },
              miss_distance: {
                astronomical: '0.0099771345',
                lunar: '3.8811053205',
                kilometers: '1492558.069903515',
                miles: '927432.579017907'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ],
      '2024-09-15': [
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2066251?api_key=DEMO_KEY'
          },
          id: '2066251',
          neo_reference_id: '2066251',
          name: '66251 (1999 GJ2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2066251',
          absolute_magnitude_h: 17.04,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 1.038855101,
              estimated_diameter_max: 2.3229506246
            },
            meters: {
              estimated_diameter_min: 1038.8551010162,
              estimated_diameter_max: 2322.9506246446
            },
            miles: {
              estimated_diameter_min: 0.645514433,
              estimated_diameter_max: 1.4434141526
            },
            feet: {
              estimated_diameter_min: 3408.317369618,
              estimated_diameter_max: 7621.2293273591
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 19:53',
              epoch_date_close_approach: 1726429980000,
              relative_velocity: {
                kilometers_per_second: '5.6464158554',
                kilometers_per_hour: '20327.0970795418',
                miles_per_hour: '12630.4676270075'
              },
              miss_distance: {
                astronomical: '0.2482897792',
                lunar: '96.5847241088',
                kilometers: '37143622.111090304',
                miles: '23079976.5470980352'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2459386?api_key=DEMO_KEY'
          },
          id: '2459386',
          neo_reference_id: '2459386',
          name: '459386 (2012 KJ11)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2459386',
          absolute_magnitude_h: 17.01,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 1.0533070151,
              estimated_diameter_max: 2.3552660868
            },
            meters: {
              estimated_diameter_min: 1053.307015051,
              estimated_diameter_max: 2355.2660868313
            },
            miles: {
              estimated_diameter_min: 0.6544944332,
              estimated_diameter_max: 1.4634940436
            },
            feet: {
              estimated_diameter_min: 3455.7317872598,
              estimated_diameter_max: 7727.2511883197
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 11:05',
              epoch_date_close_approach: 1726398300000,
              relative_velocity: {
                kilometers_per_second: '26.8395698933',
                kilometers_per_hour: '96622.451615758',
                miles_per_hour: '60037.4338942469'
              },
              miss_distance: {
                astronomical: '0.1926708059',
                lunar: '74.9489434951',
                kilometers: '28823142.173823433',
                miles: '17909870.0551040554'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2497096?api_key=DEMO_KEY'
          },
          id: '2497096',
          neo_reference_id: '2497096',
          name: '497096 (2004 BW1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2497096',
          absolute_magnitude_h: 18.96,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.4290965044,
              estimated_diameter_max: 0.9594889528
            },
            meters: {
              estimated_diameter_min: 429.0965044045,
              estimated_diameter_max: 959.488952756
            },
            miles: {
              estimated_diameter_min: 0.266628124,
              estimated_diameter_max: 0.5961986101
            },
            feet: {
              estimated_diameter_min: 1407.7969755104,
              estimated_diameter_max: 3147.9297357598
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 04:37',
              epoch_date_close_approach: 1726375020000,
              relative_velocity: {
                kilometers_per_second: '8.0185076749',
                kilometers_per_hour: '28866.6276297508',
                miles_per_hour: '17936.5998180527'
              },
              miss_distance: {
                astronomical: '0.198399046',
                lunar: '77.177228894',
                kilometers: '29680074.69163202',
                miles: '18442343.230561076'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/2537098?api_key=DEMO_KEY'
          },
          id: '2537098',
          neo_reference_id: '2537098',
          name: '537098 (2015 GZ45)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2537098',
          absolute_magnitude_h: 19.28,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3703010782,
              estimated_diameter_max: 0.828018383
            },
            meters: {
              estimated_diameter_min: 370.3010782229,
              estimated_diameter_max: 828.0183830478
            },
            miles: {
              estimated_diameter_min: 0.2300943513,
              estimated_diameter_max: 0.5145066107
            },
            feet: {
              estimated_diameter_min: 1214.8985894767,
              estimated_diameter_max: 2716.5958318385
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 06:29',
              epoch_date_close_approach: 1726381740000,
              relative_velocity: {
                kilometers_per_second: '10.7406916578',
                kilometers_per_hour: '38666.4899681574',
                miles_per_hour: '24025.8531693809'
              },
              miss_distance: {
                astronomical: '0.1695221202',
                lunar: '65.9441047578',
                kilometers: '25360148.099803974',
                miles: '15758065.3180198812'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3001703?api_key=DEMO_KEY'
          },
          id: '3001703',
          neo_reference_id: '3001703',
          name: '(1989 AZ)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3001703',
          absolute_magnitude_h: 19.68,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3080030213,
              estimated_diameter_max: 0.6887156928
            },
            meters: {
              estimated_diameter_min: 308.003021266,
              estimated_diameter_max: 688.7156928262
            },
            miles: {
              estimated_diameter_min: 0.1913841453,
              estimated_diameter_max: 0.4279479588
            },
            feet: {
              estimated_diameter_min: 1010.5086322905,
              estimated_diameter_max: 2259.5659936518
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 03:55',
              epoch_date_close_approach: 1726372500000,
              relative_velocity: {
                kilometers_per_second: '9.0492269654',
                kilometers_per_hour: '32577.2170755935',
                miles_per_hour: '20242.2157989986'
              },
              miss_distance: {
                astronomical: '0.1876653548',
                lunar: '73.0018230172',
                kilometers: '28074337.350874276',
                miles: '17444584.3137099688'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3752409?api_key=DEMO_KEY'
          },
          id: '3752409',
          neo_reference_id: '3752409',
          name: '(2016 HF2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3752409',
          absolute_magnitude_h: 26.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0160160338,
              estimated_diameter_max: 0.0358129403
            },
            meters: {
              estimated_diameter_min: 16.0160337979,
              estimated_diameter_max: 35.8129403019
            },
            miles: {
              estimated_diameter_min: 0.0099518989,
              estimated_diameter_max: 0.0222531225
            },
            feet: {
              estimated_diameter_min: 52.5460443254,
              estimated_diameter_max: 117.4965270602
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 08:35',
              epoch_date_close_approach: 1726389300000,
              relative_velocity: {
                kilometers_per_second: '11.7142190143',
                kilometers_per_hour: '42171.1884513562',
                miles_per_hour: '26203.5365130107'
              },
              miss_distance: {
                astronomical: '0.2117746543',
                lunar: '82.3803405227',
                kilometers: '31681037.203266341',
                miles: '19685683.6808278658'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3767015?api_key=DEMO_KEY'
          },
          id: '3767015',
          neo_reference_id: '3767015',
          name: '(2017 BZ6)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3767015',
          absolute_magnitude_h: 26.1,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0160160338,
              estimated_diameter_max: 0.0358129403
            },
            meters: {
              estimated_diameter_min: 16.0160337979,
              estimated_diameter_max: 35.8129403019
            },
            miles: {
              estimated_diameter_min: 0.0099518989,
              estimated_diameter_max: 0.0222531225
            },
            feet: {
              estimated_diameter_min: 52.5460443254,
              estimated_diameter_max: 117.4965270602
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 03:49',
              epoch_date_close_approach: 1726372140000,
              relative_velocity: {
                kilometers_per_second: '16.2297672001',
                kilometers_per_hour: '58427.1619204216',
                miles_per_hour: '36304.3662499419'
              },
              miss_distance: {
                astronomical: '0.4975208438',
                lunar: '193.5356082382',
                kilometers: '74428058.513082706',
                miles: '46247451.0372291028'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3775207?api_key=DEMO_KEY'
          },
          id: '3775207',
          neo_reference_id: '3775207',
          name: '(2017 MA)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3775207',
          absolute_magnitude_h: 21.77,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1176399894,
              estimated_diameter_max: 0.2630510131
            },
            meters: {
              estimated_diameter_min: 117.639989374,
              estimated_diameter_max: 263.0510131126
            },
            miles: {
              estimated_diameter_min: 0.0730980778,
              estimated_diameter_max: 0.1634522711
            },
            feet: {
              estimated_diameter_min: 385.9579827377,
              estimated_diameter_max: 863.0282858603
            }
          },
          is_potentially_hazardous_asteroid: true,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 04:29',
              epoch_date_close_approach: 1726374540000,
              relative_velocity: {
                kilometers_per_second: '14.9658196801',
                kilometers_per_hour: '53876.9508484414',
                miles_per_hour: '33477.0420424662'
              },
              miss_distance: {
                astronomical: '0.3108470428',
                lunar: '120.9194996492',
                kilometers: '46502055.498678836',
                miles: '28895037.4061904968'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/3838859?api_key=DEMO_KEY'
          },
          id: '3838859',
          neo_reference_id: '3838859',
          name: '(2019 DJ1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3838859',
          absolute_magnitude_h: 26.81,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0115492818,
              estimated_diameter_max: 0.0258249791
            },
            meters: {
              estimated_diameter_min: 11.5492817585,
              estimated_diameter_max: 25.8249791033
            },
            miles: {
              estimated_diameter_min: 0.0071763888,
              estimated_diameter_max: 0.0160468931
            },
            feet: {
              estimated_diameter_min: 37.8913455645,
              estimated_diameter_max: 84.7276244411
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 22:23',
              epoch_date_close_approach: 1726438980000,
              relative_velocity: {
                kilometers_per_second: '4.8603324766',
                kilometers_per_hour: '17497.1969158969',
                miles_per_hour: '10872.0777169916'
              },
              miss_distance: {
                astronomical: '0.0267068387',
                lunar: '10.3889602543',
                kilometers: '3995286.183953569',
                miles: '2482555.7170704922'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54054277?api_key=DEMO_KEY'
          },
          id: '54054277',
          neo_reference_id: '54054277',
          name: '(2020 RV5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54054277',
          absolute_magnitude_h: 23.9,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.04411182,
              estimated_diameter_max: 0.0986370281
            },
            meters: {
              estimated_diameter_min: 44.1118199997,
              estimated_diameter_max: 98.6370281305
            },
            miles: {
              estimated_diameter_min: 0.0274098057,
              estimated_diameter_max: 0.0612901888
            },
            feet: {
              estimated_diameter_min: 144.7238235278,
              estimated_diameter_max: 323.6123073718
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 01:32',
              epoch_date_close_approach: 1726363920000,
              relative_velocity: {
                kilometers_per_second: '11.573202972',
                kilometers_per_hour: '41663.5306992331',
                miles_per_hour: '25888.0977280874'
              },
              miss_distance: {
                astronomical: '0.198361696',
                lunar: '77.162699744',
                kilometers: '29674487.21118752',
                miles: '18438871.331206976'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54130503?api_key=DEMO_KEY'
          },
          id: '54130503',
          neo_reference_id: '54130503',
          name: '(2021 ED2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54130503',
          absolute_magnitude_h: 28.73,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.004770402,
              estimated_diameter_max: 0.0106669431
            },
            meters: {
              estimated_diameter_min: 4.7704019801,
              estimated_diameter_max: 10.6669431075
            },
            miles: {
              estimated_diameter_min: 0.0029641894,
              estimated_diameter_max: 0.0066281291
            },
            feet: {
              estimated_diameter_min: 15.6509256325,
              estimated_diameter_max: 34.996533625
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 20:17',
              epoch_date_close_approach: 1726431420000,
              relative_velocity: {
                kilometers_per_second: '11.8185605865',
                kilometers_per_hour: '42546.8181115757',
                miles_per_hour: '26436.938176051'
              },
              miss_distance: {
                astronomical: '0.2943719378',
                lunar: '114.5106838042',
                kilometers: '44037414.882652486',
                miles: '27363580.7419808668'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54189755?api_key=DEMO_KEY'
          },
          id: '54189755',
          neo_reference_id: '54189755',
          name: '(2021 NM39)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54189755',
          absolute_magnitude_h: 20.31,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.2304384666,
              estimated_diameter_max: 0.5152760759
            },
            meters: {
              estimated_diameter_min: 230.4384665765,
              estimated_diameter_max: 515.2760758959
            },
            miles: {
              estimated_diameter_min: 0.1431877804,
              estimated_diameter_max: 0.3201776106
            },
            feet: {
              estimated_diameter_min: 756.031738683,
              estimated_diameter_max: 1690.5383608424
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 06:45',
              epoch_date_close_approach: 1726382700000,
              relative_velocity: {
                kilometers_per_second: '17.8119601208',
                kilometers_per_hour: '64123.0564349977',
                miles_per_hour: '39843.5735942907'
              },
              miss_distance: {
                astronomical: '0.4376976771',
                lunar: '170.2643963919',
                kilometers: '65478640.198107777',
                miles: '40686540.3591582426'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54276728?api_key=DEMO_KEY'
          },
          id: '54276728',
          neo_reference_id: '54276728',
          name: '(2022 HW2)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54276728',
          absolute_magnitude_h: 20.85,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.1797028549,
              estimated_diameter_max: 0.4018277992
            },
            meters: {
              estimated_diameter_min: 179.7028548592,
              estimated_diameter_max: 401.8277992159
            },
            miles: {
              estimated_diameter_min: 0.1116621426,
              estimated_diameter_max: 0.2496841414
            },
            feet: {
              estimated_diameter_min: 589.5763143362,
              estimated_diameter_max: 1318.3327167796
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 00:21',
              epoch_date_close_approach: 1726359660000,
              relative_velocity: {
                kilometers_per_second: '15.9900640906',
                kilometers_per_hour: '57564.230726088',
                miles_per_hour: '35768.1743642184'
              },
              miss_distance: {
                astronomical: '0.2376151481',
                lunar: '92.4322926109',
                kilometers: '35546720.035494547',
                miles: '22087707.6094448686'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54382563?api_key=DEMO_KEY'
          },
          id: '54382563',
          neo_reference_id: '54382563',
          name: '(2023 RN7)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54382563',
          absolute_magnitude_h: 23.17,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.061738344,
              estimated_diameter_max: 0.1380511341
            },
            meters: {
              estimated_diameter_min: 61.7383440472,
              estimated_diameter_max: 138.0511341077
            },
            miles: {
              estimated_diameter_min: 0.0383624166,
              estimated_diameter_max: 0.0857809713
            },
            feet: {
              estimated_diameter_min: 202.5536286837,
              estimated_diameter_max: 452.9236828261
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 04:28',
              epoch_date_close_approach: 1726374480000,
              relative_velocity: {
                kilometers_per_second: '8.526511326',
                kilometers_per_hour: '30695.4407736975',
                miles_per_hour: '19072.95318519'
              },
              miss_distance: {
                astronomical: '0.3261593379',
                lunar: '126.8759824431',
                kilometers: '48792742.230450273',
                miles: '30318404.1389208474'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54383801?api_key=DEMO_KEY'
          },
          id: '54383801',
          neo_reference_id: '54383801',
          name: '(2023 RD15)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54383801',
          absolute_magnitude_h: 26.89,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.011131533,
              estimated_diameter_max: 0.0248908644
            },
            meters: {
              estimated_diameter_min: 11.1315329608,
              estimated_diameter_max: 24.8908643942
            },
            miles: {
              estimated_diameter_min: 0.0069168118,
              estimated_diameter_max: 0.0154664613
            },
            feet: {
              estimated_diameter_min: 36.5207785992,
              estimated_diameter_max: 81.6629435391
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 18:32',
              epoch_date_close_approach: 1726425120000,
              relative_velocity: {
                kilometers_per_second: '11.9500768424',
                kilometers_per_hour: '43020.27663268',
                miles_per_hour: '26731.1268887894'
              },
              miss_distance: {
                astronomical: '0.2338873761',
                lunar: '90.9821893029',
                kilometers: '34989053.284448907',
                miles: '21741189.5586006366'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54384198?api_key=DEMO_KEY'
          },
          id: '54384198',
          neo_reference_id: '54384198',
          name: '(2023 RA16)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54384198',
          absolute_magnitude_h: 24.42,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0347180222,
              estimated_diameter_max: 0.0776318577
            },
            meters: {
              estimated_diameter_min: 34.7180222065,
              estimated_diameter_max: 77.6318576982
            },
            miles: {
              estimated_diameter_min: 0.0215727722,
              estimated_diameter_max: 0.048238185
            },
            feet: {
              estimated_diameter_min: 113.9042759761,
              estimated_diameter_max: 254.6977040105
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 18:34',
              epoch_date_close_approach: 1726425240000,
              relative_velocity: {
                kilometers_per_second: '14.504725868',
                kilometers_per_hour: '52217.0131247802',
                miles_per_hour: '32445.6212941169'
              },
              miss_distance: {
                astronomical: '0.1599880248',
                lunar: '62.2353416472',
                kilometers: '23933867.735587176',
                miles: '14871815.7956319888'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54431806?api_key=DEMO_KEY'
          },
          id: '54431806',
          neo_reference_id: '54431806',
          name: '(2024 FA3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54431806',
          absolute_magnitude_h: 26.17,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0155079709,
              estimated_diameter_max: 0.0346768771
            },
            meters: {
              estimated_diameter_min: 15.5079708716,
              estimated_diameter_max: 34.676877062
            },
            miles: {
              estimated_diameter_min: 0.0096362034,
              estimated_diameter_max: 0.0215472058
            },
            feet: {
              estimated_diameter_min: 50.8791711544,
              estimated_diameter_max: 113.76928534
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 16:24',
              epoch_date_close_approach: 1726417440000,
              relative_velocity: {
                kilometers_per_second: '8.3849032772',
                kilometers_per_hour: '30185.6517980262',
                miles_per_hour: '18756.1901408346'
              },
              miss_distance: {
                astronomical: '0.2719233428',
                lunar: '105.7781803492',
                kilometers: '40679152.886159836',
                miles: '25276853.5001882968'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54437395?api_key=DEMO_KEY'
          },
          id: '54437395',
          neo_reference_id: '54437395',
          name: '(2024 HK1)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54437395',
          absolute_magnitude_h: 25.46,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.021505769,
              estimated_diameter_max: 0.0480883614
            },
            meters: {
              estimated_diameter_min: 21.5057690002,
              estimated_diameter_max: 48.0883613928
            },
            miles: {
              estimated_diameter_min: 0.0133630612,
              estimated_diameter_max: 0.0298807132
            },
            feet: {
              estimated_diameter_min: 70.5569871665,
              estimated_diameter_max: 157.7702195919
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 20:54',
              epoch_date_close_approach: 1726433640000,
              relative_velocity: {
                kilometers_per_second: '6.4050268469',
                kilometers_per_hour: '23058.096648756',
                miles_per_hour: '14327.4045537784'
              },
              miss_distance: {
                astronomical: '0.3039240162',
                lunar: '118.2264423018',
                kilometers: '45466385.465365494',
                miles: '28251501.8886280572'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54458183?api_key=DEMO_KEY'
          },
          id: '54458183',
          neo_reference_id: '54458183',
          name: '(2024 NY)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54458183',
          absolute_magnitude_h: 22.322,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0912336346,
              estimated_diameter_max: 0.2040046087
            },
            meters: {
              estimated_diameter_min: 91.2336345602,
              estimated_diameter_max: 204.004608711
            },
            miles: {
              estimated_diameter_min: 0.0566899347,
              estimated_diameter_max: 0.1267625477
            },
            feet: {
              estimated_diameter_min: 299.3229576106,
              estimated_diameter_max: 669.3064804435
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 08:06',
              epoch_date_close_approach: 1726387560000,
              relative_velocity: {
                kilometers_per_second: '13.9380437516',
                kilometers_per_hour: '50176.9575055872',
                miles_per_hour: '31178.0100678467'
              },
              miss_distance: {
                astronomical: '0.3906430934',
                lunar: '151.9601633326',
                kilometers: '58439374.702851058',
                miles: '36312543.6053302804'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468765?api_key=DEMO_KEY'
          },
          id: '54468765',
          neo_reference_id: '54468765',
          name: '(2024 RT3)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468765',
          absolute_magnitude_h: 26.028,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0165559832,
              estimated_diameter_max: 0.0370203038
            },
            meters: {
              estimated_diameter_min: 16.5559831837,
              estimated_diameter_max: 37.0203038332
            },
            miles: {
              estimated_diameter_min: 0.0102874078,
              estimated_diameter_max: 0.0230033432
            },
            feet: {
              estimated_diameter_min: 54.3175318685,
              estimated_diameter_max: 121.457693628
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 00:01',
              epoch_date_close_approach: 1726358460000,
              relative_velocity: {
                kilometers_per_second: '9.5629552775',
                kilometers_per_hour: '34426.6389988482',
                miles_per_hour: '21391.3746601454'
              },
              miss_distance: {
                astronomical: '0.0418436559',
                lunar: '16.2771821451',
                kilometers: '6259721.795652933',
                miles: '3889610.7601711554'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468788?api_key=DEMO_KEY'
          },
          id: '54468788',
          neo_reference_id: '54468788',
          name: '(2024 RS4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468788',
          absolute_magnitude_h: 26.337,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0143600177,
              estimated_diameter_max: 0.0321099758
            },
            meters: {
              estimated_diameter_min: 14.3600177461,
              estimated_diameter_max: 32.1099758383
            },
            miles: {
              estimated_diameter_min: 0.0089228986,
              estimated_diameter_max: 0.0199522078
            },
            feet: {
              estimated_diameter_min: 47.112920622,
              estimated_diameter_max: 105.3476931294
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 17:13',
              epoch_date_close_approach: 1726420380000,
              relative_velocity: {
                kilometers_per_second: '10.5011596125',
                kilometers_per_hour: '37804.1746050155',
                miles_per_hour: '23490.0439372109'
              },
              miss_distance: {
                astronomical: '0.0167291363',
                lunar: '6.5076340207',
                kilometers: '2502643.157419681',
                miles: '1555070.3484503578'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54468793?api_key=DEMO_KEY'
          },
          id: '54468793',
          neo_reference_id: '54468793',
          name: '(2024 RX4)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54468793',
          absolute_magnitude_h: 25.927,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0173442281,
              estimated_diameter_max: 0.0387828731
            },
            meters: {
              estimated_diameter_min: 17.3442281061,
              estimated_diameter_max: 38.7828730625
            },
            miles: {
              estimated_diameter_min: 0.0107772004,
              estimated_diameter_max: 0.0240985526
            },
            feet: {
              estimated_diameter_min: 56.9036373396,
              estimated_diameter_max: 127.2404012583
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 19:02',
              epoch_date_close_approach: 1726426920000,
              relative_velocity: {
                kilometers_per_second: '4.6191177416',
                kilometers_per_hour: '16628.8238696981',
                miles_per_hour: '10332.5044761466'
              },
              miss_distance: {
                astronomical: '0.0687364311',
                lunar: '26.7384716979',
                kilometers: '10282823.683961757',
                miles: '6389450.3544639666'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54469017?api_key=DEMO_KEY'
          },
          id: '54469017',
          neo_reference_id: '54469017',
          name: '(2024 RQ5)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54469017',
          absolute_magnitude_h: 28.052,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0065186097,
              estimated_diameter_max: 0.0145760543
            },
            meters: {
              estimated_diameter_min: 6.5186096708,
              estimated_diameter_max: 14.5760543427
            },
            miles: {
              estimated_diameter_min: 0.004050475,
              estimated_diameter_max: 0.0090571375
            },
            feet: {
              estimated_diameter_min: 21.3865153523,
              estimated_diameter_max: 47.8217021295
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 05:58',
              epoch_date_close_approach: 1726379880000,
              relative_velocity: {
                kilometers_per_second: '5.9198216701',
                kilometers_per_hour: '21311.3580124123',
                miles_per_hour: '13242.0490938792'
              },
              miss_distance: {
                astronomical: '0.0028827472',
                lunar: '1.1213886608',
                kilometers: '431252.840868464',
                miles: '267968.0894702432'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: true,
          sentry_data: 'http://api.nasa.gov/neo/rest/v1/neo/sentry/54469017?api_key=DEMO_KEY'
        },
        {
          links: {
            self: 'http://api.nasa.gov/neo/rest/v1/neo/54470175?api_key=DEMO_KEY'
          },
          id: '54470175',
          neo_reference_id: '54470175',
          name: '(2024 RM10)',
          nasa_jpl_url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54470175',
          absolute_magnitude_h: 25.413,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.0219763203,
              estimated_diameter_max: 0.0491405461
            },
            meters: {
              estimated_diameter_min: 21.9763203204,
              estimated_diameter_max: 49.1405461316
            },
            miles: {
              estimated_diameter_min: 0.0136554481,
              estimated_diameter_max: 0.0305345103
            },
            feet: {
              estimated_diameter_min: 72.1007907598,
              estimated_diameter_max: 161.2222693705
            }
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: '2024-09-15',
              close_approach_date_full: '2024-Sep-15 04:08',
              epoch_date_close_approach: 1726373280000,
              relative_velocity: {
                kilometers_per_second: '6.5674827968',
                kilometers_per_hour: '23642.9380685616',
                miles_per_hour: '14690.8022682127'
              },
              miss_distance: {
                astronomical: '0.0132950195',
                lunar: '5.1717625855',
                kilometers: '1988906.598808465',
                miles: '1235849.253408217'
              },
              orbiting_body: 'Earth'
            }
          ],
          is_sentry_object: false
        }
      ]
    }
  })

  const getAsteroidFeed = async () => {
    const near_earth_objects = feeds.value.near_earth_objects
    // Iterating over the dates and their objects
    for (const [key, objects] of Object.entries(near_earth_objects)) {
      objects.forEach((obj) => {
        // Looping through each close approach data for asteroid
        obj.close_approach_data.forEach((approach) => {
          // Extract the speed in kilometers per hour
          const speed = parseFloat(approach.relative_velocity.kilometers_per_hour)
          // Check if this is the highest speed we've seen so far
          if (speed > highestSpeed.value) {
            highestSpeed.value = speed
            fastestAsteroidId.value = obj.id
          }

          const distance = parseFloat(approach.miss_distance.kilometers);
          if (distance < shortestDistance.value) {
              shortestDistance.value = distance;
              closestAsteroidId.value = obj.id;
          }
        })

         // Calculate the average size of the asteroid
         const minDiameter = obj.estimated_diameter.kilometers.estimated_diameter_min;
         const maxDiameter = obj.estimated_diameter.kilometers.estimated_diameter_max;
         const averageDiameter = (minDiameter + maxDiameter) / 2;
         totalDiameter.value += averageDiameter;

         asteroidCount.value ++;
      })
    }

    
    avarageSize.value = totalDiameter.value / asteroidCount.value
  
    
  }

  return { startDate, endDate, dateRange, getAsteroidFeed, feeds, fastestAsteroidId, highestSpeed, shortestDistance, closestAsteroidId, avarageSize, asteroidCount }
})
