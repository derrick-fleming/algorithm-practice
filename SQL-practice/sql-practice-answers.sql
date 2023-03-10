/* Question 1 - Show first name, last name, and gender of patients who's gender is 'M'*/
SELECT first_name,
	   last_name,
       gender
FROM patients
where gender = 'M'

/* Question 2 - Show first name and last name of patients who does not have allergies. (null) */
SELECT first_name,
	   last_name
FROM patients
where allergies is null

/* Question 3 - Show first name of patients that start with the letter 'C' */
SELECT first_name
FROM patients
where first_name like 'C%'

/* Question 4 - Show first name and last name of patients that weight within the range of 100 to 120 (inclusive) */
SELECT first_name,
	   last_name
FROM patients
where weight between 100 and 120

/* Question 5 - Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA' */
update patients
set "allergies" = 'NKA'
where allergies is null

/* Question 6 - Show first name and last name concatinated into one column to show their full name. */
select concat(first_name, " ", last_name) as fullName
from patients

/* Question 7 - Show first name, last name, and the full province name of each patient.
Example: 'Ontario' instead of 'ON' */
select first_name,
	   last_name,
       province_name
from patients
join province_names using (province_id)

/* Question 8 - Show how many patients have a birth_date with 2010 as the birth year. */
select count(birth_date)
from patients
where birth_date like '2010%'

/* Question 9 - Show the first_name, last_name, and height of the patient with the greatest height. */
select first_name,
	   last_name,
       height
from patients
order by height desc
limit 1

/* Question 10 - Show all columns for patients who have one of the following patient_ids: 1,45,534,879,1000 */
select *
from patients
where patient_id In (1,45,534,879,1000)

/* Question 11 - Count all admissions */
select Count()
from admissions

/* Question 12 - Show all the columns from admissions where the patient was admitted and discharged on the same day. */
select *
from admissions
where admission_date = discharge_date;

/* Question 13 - Show the patient id and the total number of admissions for patient_id 579. */
select patient_id,
       count (admission_date)
from admissions
where patient_id = 579

/* Question 14 - Based on the cities that our patients live in, show unique cities that are in province_id 'NS'? */
select DISTINCT city
from patients
where province_id = 'NS'

/* Question 15 - Write a query to find the first_name, last name and birth date of patients who has height greater than 160 and weight greater than 70 */
select first_name,
       last_name,
       birth_date
from patients
where height > 160 and weight > 70

/* Question 16 - Write a query to find list of patients first_name, last_name, and allergies from Hamilton where allergies are not null */
select first_name,
       last_name,
       allergies
from patients
where city = 'Hamilton' and allergies not null

/* Question 17 - Based on cities where our patient lives in, write a query to display the list of unique city starting with a vowel (a, e, i, o, u). Show the result order in ascending by city. */
select distinct city
from patients
where
   city like 'a%'
   or city like 'e%'
   or city LIke 'i%'
   or city Like 'o%'
   or city Like 'u%'
order by city

/* MEDIUM QUESTIONS

Question 1 -
Show unique birth years from patients and order them by ascending. */
select Distinct Year(birth_date) as birth_year
from patients
order by birth_year

/* Question 2 -
Show unique first names from the patients table which only occurs once in the list.
For example, if two or more people are named 'John' in the first_name column then don't include their name in the output list.
If only 1 person is named 'Leo' then include them in the output. */
select first_name
from patients
group by first_name
Having count(patient_id) = 1

/* Question 3 -
Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.*/
select patient_id,
       first_name
from patients
where first_name like 's____%s'

/* Question 4 -
Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.
Primary diagnosis is stored in the admissions table. */
select patient_id,
       first_name,
       last_name
from patients
join admissions using (patient_id)
where diagnosis = 'Dementia'

/* Question 5 -
Display every patient's first_name.
Order the list by the length of each name and then by alphbetically */
select first_name
from patients
order by
	Len(first_name),
	first_name

/* Question 6 -
Show the total amount of male patients and the total amount of female patients in the patients table.
Display the two results in the same row. */
select
	SUM(gender = 'M') as male,
  SUM(gender = 'F') as female
from patients

/* Question 7 -
Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'.
Show results ordered ascending by allergies then by first_name then by last_name. */
select
	first_name,
    last_name,
    allergies
from patients
where allergies = 'Penicillin' or allergies = 'Morphine'
order by
	allergies asc,
    first_name,
    last_name

/* Question 8 -
Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis. */
select
	patient_id,
    diagnosis
from admissions
group by
  patient_id,
  diagnosis
having count(*) > 1

/* Question 9 -
Show the city and the total number of patients in the city.
Order from most to least patients and then by city name ascending. */
select
	city,
    count(*) as total_patients
from patients
group by city
order by
	total_patients desc,
    city asc

/* Question 10 -
Show first name, last name and role of every person that is either patient or doctor.
The roles are either "Patient" or "Doctor" */
SELECT first_name, last_name, 'Patient' AS role FROM patients
	UNION ALL
SELECT first_name, last_name, 'Doctor' AS role FROM doctors
