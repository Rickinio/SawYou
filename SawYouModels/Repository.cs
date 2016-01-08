using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SawYouModels
{
    public interface IRepository {
        List<SawYouModel> Get();

        void Save(SawYouModel model);
    }
    public class Repository:IRepository
    {
        private List<SawYouModel> _SawYouList = new List<SawYouModel>() { new SawYouModel() { CheckInDescription = "asdadad", CheckInType = GenericEnumerations.CheckInType.Foursquare, Email = "ricky@hotmail.com", Id = 1, FoursquareVenueId = "1232313",FoursquareVenueAddress="Karaiskaki 18 Kifisia",FoursquareVenueName= "Why Sleep" } };
        public List<SawYouModel> Get(){
        
            return this._SawYouList;
        }

        public void Save(SawYouModel model){
            this._SawYouList.Add(model);
        }
    }
}
