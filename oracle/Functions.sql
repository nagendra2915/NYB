----character Function-----
SELECT
  UPPER('oracle') AS upper_case,
  LOWER('ORACLE') AS lower_case,
  INITCAP('oracle sql') AS initcap,
  LENGTH('oracle') AS length,
  SUBSTR('oracle', 2, 3) AS substr,
  INSTR('oracle', 'a') AS instr,
  LPAD('oracle', 10, '*') AS lpad,
  RPAD('oracle', 10, '*') AS rpad,
  LTRIM('   oracle') AS ltrim,
  RTRIM('oracle   ') AS rtrim,
  TRIM(' o' FROM 'oooracleoo') AS trim,
  REPLACE('oracle', 'a', '@') AS replace,
  TRANSLATE('oracle', 'aeiou', '12345') AS translate,
  CONCAT('ora', 'cle') AS concat,
  ASCII('A') AS ascii,
  CHR(65) AS chr
  FROM dual;

-----numeric functions-----
SELECT
  15.75 AS original,
  ABS(-15.75) AS abs_val,
  CEIL(15.75) AS ceil_val,
  FLOOR(15.75) AS floor_val,
  ROUND(15.756, 2) AS round_val,
  TRUNC(15.756, 2) AS trunc_val,
  MOD(15, 4) AS mod_val,
  POWER(2, 3) AS power_val,
  SQRT(16) AS sqrt_val,
  EXP(1) AS exp_val,
  LN(10) AS ln_val,
  LOG(10, 1000) AS log_base10,
  SIGN(-25) AS sign_val,
  GREATEST(10, 20, 5) AS greatest_val,
  LEAST(10, 20, 5) AS least_val,
  WIDTH_BUCKET(15, 0, 30, 3) AS width_bucket_val,
  REMAINDER(15, 4) AS remainder_val
FROM dual;

----date functions-----

SELECT
  SYSDATE AS current_date,
  CURRENT_DATE AS session_date,
  SYSTIMESTAMP AS system_timestamp,
  CURRENT_TIMESTAMP AS session_timestamp,
  LOCALTIMESTAMP AS local_timestamp,
  
  ADD_MONTHS(SYSDATE, 3) AS add_months,
  MONTHS_BETWEEN(SYSDATE, TO_DATE('2024-01-01', 'YYYY-MM-DD')) AS months_between,
  NEXT_DAY(SYSDATE, 'FRIDAY') AS next_friday,
  LAST_DAY(SYSDATE) AS last_day_of_month,
  ROUND(SYSDATE, 'MONTH') AS round_to_month,
  TRUNC(SYSDATE, 'MONTH') AS trunc_to_month
FROM dual;

----conversion functions------

SELECT
  -- Character to Number
  TO_NUMBER('123.45') AS to_number_example,

  -- Number to Character
  TO_CHAR(123.45, '999.99') AS to_char_number,

  -- Date to Character
  TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS to_char_date,

  -- Character to Date
  TO_DATE('2025-04-24', 'YYYY-MM-DD') AS to_date_example,

  -- Timestamp to Character
  TO_CHAR(SYSTIMESTAMP, 'YYYY-MM-DD HH24:MI:SS.FF') AS to_char_timestamp,

  -- Character to Timestamp
  TO_TIMESTAMP('2025-04-24 15:30:00.123', 'YYYY-MM-DD HH24:MI:SS.FF') AS to_timestamp_example,

  -- String to Timestamp with Time Zone
  TO_TIMESTAMP_TZ('2025-04-24 15:30:00.000 +00:00', 'YYYY-MM-DD HH24:MI:SS.FF TZH:TZM') AS to_timestamp_tz_example


FROM dual;

---aggregate functions-----
SELECT
  COUNT(*) AS total_count,
  COUNT(salary) AS non_null_count,
  SUM(salary) AS total_salary,
  AVG(salary) AS average_salary,
  MIN(salary) AS min_salary,
  MAX(salary) AS max_salary,
  VARIANCE(salary) AS variance_salary,
  STDDEV(salary) AS stddev_salary,
  MEDIAN(salary) AS median_salary,
  LISTAGG(name, ', ') WITHIN GROUP (ORDER BY name) AS employee_names
FROM (
  SELECT 'Alice' AS name, 5000 AS salary FROM dual UNION ALL
  SELECT 'Bob', 6000 FROM dual UNION ALL
  SELECT 'Charlie', 5500 FROM dual UNION ALL
  SELECT 'Diana', NULL FROM dual
);




