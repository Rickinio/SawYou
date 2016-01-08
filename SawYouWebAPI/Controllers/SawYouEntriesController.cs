using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using SawYouWebAPI;
using Microsoft.AspNet.SignalR;
using SawYouWebAPI.hub;

namespace SawYouWebAPI.Controllers
{
    public class SawYouEntriesController : ApiController
    {
        private SawYouContex db = new SawYouContex();

        // GET: api/SawYouEntries
        public IQueryable<SawYouEntry> GetSawYouEntry()
        {
            return db.SawYouEntry;
        }

        // GET: api/SawYouEntries/5
        [ResponseType(typeof(SawYouEntry))]
        public async Task<IHttpActionResult> GetSawYouEntry(int id)
        {
            SawYouEntry sawYouEntry = await db.SawYouEntry.FindAsync(id);
            if (sawYouEntry == null)
            {
                return NotFound();
            }

            return Ok(sawYouEntry);
        }

        // PUT: api/SawYouEntries/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSawYouEntry(int id, SawYouEntry sawYouEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sawYouEntry.Id)
            {
                return BadRequest();
            }

            db.Entry(sawYouEntry).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SawYouEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SawYouEntries
        [ResponseType(typeof(SawYouEntry))]
        public async Task<IHttpActionResult> PostSawYouEntry(SawYouEntry sawYouEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SawYouEntry.Add(sawYouEntry);

            await db.SaveChangesAsync();

            var _contex = GlobalHost.ConnectionManager.GetHubContext<SawYouHub>();
            _contex.Clients.All.newEntry(sawYouEntry);
             

            return CreatedAtRoute("DefaultApi", new { id = sawYouEntry.Id }, sawYouEntry);
        }

        // DELETE: api/SawYouEntries/5
        [ResponseType(typeof(SawYouEntry))]
        public async Task<IHttpActionResult> DeleteSawYouEntry(int id)
        {
            SawYouEntry sawYouEntry = await db.SawYouEntry.FindAsync(id);
            if (sawYouEntry == null)
            {
                return NotFound();
            }

            db.SawYouEntry.Remove(sawYouEntry);
            await db.SaveChangesAsync();

            return Ok(sawYouEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SawYouEntryExists(int id)
        {
            return db.SawYouEntry.Count(e => e.Id == id) > 0;
        }
    }
}