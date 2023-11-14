﻿// <auto-generated />
using System;
using CaseStudyKampusLearnAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace KampusLearn_6.Migrations
{
    [DbContext(typeof(KampusLearnContext))]
    [Migration("20231102160958_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Admin", b =>
                {
                    b.Property<int>("AdminId")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("AdminId");

                    b.ToTable("Admin");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Candidate", b =>
                {
                    b.Property<int>("CandidateId")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("CandidateId");

                    b.ToTable("Candidate");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.CandidateCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CandidateId")
                        .HasColumnType("int");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPaymentDone")
                        .HasColumnType("bit");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CandidateId");

                    b.HasIndex("CourseId");

                    b.ToTable("CandidateCourse");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Course", b =>
                {
                    b.Property<int>("CourseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CourseId"));

                    b.Property<int?>("AdminId")
                        .HasColumnType("int");

                    b.Property<string>("CourseCategory")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CourseName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("DurationInHours")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Enddate")
                        .HasColumnType("datetime2");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int?>("Price")
                        .HasColumnType("int");

                    b.Property<int?>("Progress")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Startdate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Time")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Totalparticipant")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Weekday")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CourseId");

                    b.HasIndex("AdminId");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Payment", b =>
                {
                    b.Property<int>("PaymentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PaymentId"));

                    b.Property<int?>("CandidateId")
                        .HasColumnType("int");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int?>("TrainerId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("PaymentId");

                    b.HasIndex("CandidateId");

                    b.HasIndex("CourseId");

                    b.HasIndex("TrainerId");

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Progress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("Attendance")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int?>("TrainerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("TrainerId");

                    b.ToTable("Progress");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Scheduling", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<string>("Timing")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TrainerId")
                        .HasColumnType("int");

                    b.Property<string>("WeekDay")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("TrainerId");

                    b.ToTable("Scheduling");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Trainer", b =>
                {
                    b.Property<int>("TrainerId")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("AdminId")
                        .HasColumnType("int");

                    b.Property<string>("Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Qualification")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("YearOfExperience")
                        .HasColumnType("int");

                    b.HasKey("TrainerId");

                    b.HasIndex("AdminId");

                    b.ToTable("Trainer");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.TrainerCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AdminId")
                        .HasColumnType("int");

                    b.Property<int?>("CandidateId")
                        .HasColumnType("int");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TrainerId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.HasIndex("CandidateId");

                    b.HasIndex("CourseId");

                    b.HasIndex("TrainerId");

                    b.ToTable("TrainerCourse");
                });

            modelBuilder.Entity("KampusLearn_6.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Admin", b =>
                {
                    b.HasOne("KampusLearn_6.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Candidate", b =>
                {
                    b.HasOne("KampusLearn_6.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("CandidateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.CandidateCourse", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Candidate", "Candidate")
                        .WithMany("CandidateCourse")
                        .HasForeignKey("CandidateId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Course", "Course")
                        .WithMany("CandidateCourse")
                        .HasForeignKey("CourseId");

                    b.Navigation("Candidate");

                    b.Navigation("Course");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Course", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Admin", "Admin")
                        .WithMany("Course")
                        .HasForeignKey("AdminId");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Payment", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Candidate", "Candidate")
                        .WithMany("Payment")
                        .HasForeignKey("CandidateId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Course", "Course")
                        .WithMany("Payment")
                        .HasForeignKey("CourseId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Trainer", "Trainer")
                        .WithMany()
                        .HasForeignKey("TrainerId");

                    b.Navigation("Candidate");

                    b.Navigation("Course");

                    b.Navigation("Trainer");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Progress", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Course", "Course")
                        .WithMany("ProgressNavigation")
                        .HasForeignKey("CourseId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Trainer", "Trainer")
                        .WithMany("Progress")
                        .HasForeignKey("TrainerId");

                    b.Navigation("Course");

                    b.Navigation("Trainer");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Scheduling", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Course", "Course")
                        .WithMany("Scheduling")
                        .HasForeignKey("CourseId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Trainer", "Trainer")
                        .WithMany("Scheduling")
                        .HasForeignKey("TrainerId");

                    b.Navigation("Course");

                    b.Navigation("Trainer");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Trainer", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Admin", "Admin")
                        .WithMany("Trainer")
                        .HasForeignKey("AdminId");

                    b.HasOne("KampusLearn_6.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("TrainerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Admin");

                    b.Navigation("User");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.TrainerCourse", b =>
                {
                    b.HasOne("CaseStudyKampusLearnAPI.Models.Admin", "Admin")
                        .WithMany("TrainerCourse")
                        .HasForeignKey("AdminId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Candidate", "Candidate")
                        .WithMany("TrainerCourse")
                        .HasForeignKey("CandidateId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Course", "Course")
                        .WithMany("TrainerCourse")
                        .HasForeignKey("CourseId");

                    b.HasOne("CaseStudyKampusLearnAPI.Models.Trainer", "Trainer")
                        .WithMany("TrainerCourse")
                        .HasForeignKey("TrainerId");

                    b.Navigation("Admin");

                    b.Navigation("Candidate");

                    b.Navigation("Course");

                    b.Navigation("Trainer");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Admin", b =>
                {
                    b.Navigation("Course");

                    b.Navigation("Trainer");

                    b.Navigation("TrainerCourse");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Candidate", b =>
                {
                    b.Navigation("CandidateCourse");

                    b.Navigation("Payment");

                    b.Navigation("TrainerCourse");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Course", b =>
                {
                    b.Navigation("CandidateCourse");

                    b.Navigation("Payment");

                    b.Navigation("ProgressNavigation");

                    b.Navigation("Scheduling");

                    b.Navigation("TrainerCourse");
                });

            modelBuilder.Entity("CaseStudyKampusLearnAPI.Models.Trainer", b =>
                {
                    b.Navigation("Progress");

                    b.Navigation("Scheduling");

                    b.Navigation("TrainerCourse");
                });
#pragma warning restore 612, 618
        }
    }
}
