using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Web_api.Models;

namespace Web_api.Controllers
{
    [EnableCors("*","*","*")]
    public class PetshopController : ApiController
    {
        private DBModelPetshops db = new DBModelPetshops();

        // GET: api/Petshop
        public IQueryable<Petshop> GetPetshops()
        {
            return db.Petshops;
        }

        // GET: api/Petshop/5
        [ResponseType(typeof(Petshop))]
        public IHttpActionResult GetPetshop(int id)
        {
            Petshop petshop = db.Petshops.Find(id);
            if (petshop == null)
            {
                return NotFound();
            }

            return Ok(petshop);
        }

        // PUT: api/Petshop/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPetshop(int id, Petshop petshop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != petshop.Id)
            {
                return BadRequest();
            }

            db.Entry(petshop).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetshopExists(id))
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

        // POST: api/Petshop
        [ResponseType(typeof(Petshop))]
        public IHttpActionResult PostPetshop(Petshop petshop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Petshops.Add(petshop);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = petshop.Id }, petshop);
        }

        // DELETE: api/Petshop/5
        [ResponseType(typeof(Petshop))]
        public IHttpActionResult DeletePetshop(int id)
        {
            Petshop petshop = db.Petshops.Find(id);
            if (petshop == null)
            {
                return NotFound();
            }

            db.Petshops.Remove(petshop);
            db.SaveChanges();

            return Ok(petshop);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PetshopExists(int id)
        {
            return db.Petshops.Count(e => e.Id == id) > 0;
        }
    }
}