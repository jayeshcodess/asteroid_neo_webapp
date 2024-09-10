export interface Feeds {
    links: Links
    element_count: number
    near_earth_objects: NearEarthObjects
  }
  
  export interface Links {
    next: string
    previous: string
    self: string
  }
  
  export interface NearEarthObjects {
    [key:string] : NearEarthObject[]
  }
  
  export interface NearEarthObject {
    links: Links2
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links2 {
    self: string
  }
  
  export interface EstimatedDiameter {
    kilometers: Kilometers
    meters: Meters
    miles: Miles
    feet: Feet
  }
  
  export interface Kilometers {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity
    miss_distance: MissDistance
    orbiting_body: string
  }
  
  export interface RelativeVelocity {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240911 {
    links: Links3
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter2
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum2[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links3 {
    self: string
  }
  
  export interface EstimatedDiameter2 {
    kilometers: Kilometers2
    meters: Meters2
    miles: Miles2
    feet: Feet2
  }
  
  export interface Kilometers2 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters2 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles2 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet2 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum2 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity2
    miss_distance: MissDistance2
    orbiting_body: string
  }
  
  export interface RelativeVelocity2 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance2 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240916 {
    links: Links4
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter3
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum3[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links4 {
    self: string
  }
  
  export interface EstimatedDiameter3 {
    kilometers: Kilometers3
    meters: Meters3
    miles: Miles3
    feet: Feet3
  }
  
  export interface Kilometers3 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters3 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles3 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet3 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum3 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity3
    miss_distance: MissDistance3
    orbiting_body: string
  }
  
  export interface RelativeVelocity3 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance3 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240917 {
    links: Links5
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter4
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum4[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links5 {
    self: string
  }
  
  export interface EstimatedDiameter4 {
    kilometers: Kilometers4
    meters: Meters4
    miles: Miles4
    feet: Feet4
  }
  
  export interface Kilometers4 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters4 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles4 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet4 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum4 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity4
    miss_distance: MissDistance4
    orbiting_body: string
  }
  
  export interface RelativeVelocity4 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance4 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240912 {
    links: Links6
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter5
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum5[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links6 {
    self: string
  }
  
  export interface EstimatedDiameter5 {
    kilometers: Kilometers5
    meters: Meters5
    miles: Miles5
    feet: Feet5
  }
  
  export interface Kilometers5 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters5 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles5 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet5 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum5 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity5
    miss_distance: MissDistance5
    orbiting_body: string
  }
  
  export interface RelativeVelocity5 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance5 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240913 {
    links: Links7
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter6
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum6[]
    is_sentry_object: boolean
  }
  
  export interface Links7 {
    self: string
  }
  
  export interface EstimatedDiameter6 {
    kilometers: Kilometers6
    meters: Meters6
    miles: Miles6
    feet: Feet6
  }
  
  export interface Kilometers6 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters6 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles6 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet6 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum6 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity6
    miss_distance: MissDistance6
    orbiting_body: string
  }
  
  export interface RelativeVelocity6 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance6 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240914 {
    links: Links8
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter7
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum7[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links8 {
    self: string
  }
  
  export interface EstimatedDiameter7 {
    kilometers: Kilometers7
    meters: Meters7
    miles: Miles7
    feet: Feet7
  }
  
  export interface Kilometers7 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters7 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles7 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet7 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum7 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity7
    miss_distance: MissDistance7
    orbiting_body: string
  }
  
  export interface RelativeVelocity7 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance7 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  
  export interface N20240915 {
    links: Links9
    id: string
    neo_reference_id: string
    name: string
    nasa_jpl_url: string
    absolute_magnitude_h: number
    estimated_diameter: EstimatedDiameter8
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproachDaum8[]
    is_sentry_object: boolean
    sentry_data?: string
  }
  
  export interface Links9 {
    self: string
  }
  
  export interface EstimatedDiameter8 {
    kilometers: Kilometers8
    meters: Meters8
    miles: Miles8
    feet: Feet8
  }
  
  export interface Kilometers8 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Meters8 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Miles8 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface Feet8 {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  
  export interface CloseApproachDaum8 {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: RelativeVelocity8
    miss_distance: MissDistance8
    orbiting_body: string
  }
  
  export interface RelativeVelocity8 {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  
  export interface MissDistance8 {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  