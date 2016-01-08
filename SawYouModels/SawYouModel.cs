using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SawYouModels
{
    public class SawYouModel
    {
        public int Id { get; set; }
        public SawYouModels.GenericEnumerations.CheckInType CheckInType { get; set; }
        public string FoursquareVenueId { get; set; }
        public string FoursquareVenueName { get; set; }
        public string FoursquareVenueAddress { get; set; }
        public string Email { get; set; }
        public string CheckInDescription { get; set; }
    }
}
