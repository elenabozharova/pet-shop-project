﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Web_api.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DBModelPetshops : DbContext
    {
        public DBModelPetshops()
            : base("name=DBModelPetshops")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Commented> Commenteds { get; set; }
        public virtual DbSet<Petshop> Petshops { get; set; }
        public virtual DbSet<results_final> results_final { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
