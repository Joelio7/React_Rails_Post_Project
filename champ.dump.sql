--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.0
-- Dumped by pg_dump version 9.6.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: joelscalera
--

COPY ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2018-01-20 20:54:19.506989	2018-01-20 20:54:19.506989
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: joelscalera
--

COPY posts (id, title, body, published, created_at, updated_at, factorial, author) FROM stdin;
66	Chewbacca Wins Noble Peace Prize	Chewbacca wins the noble peace prize for his wookitarian efforts on Kashyyyk. He has ended slavery from the Czerka Corporation and planted a new forest on the far side of the planet. He will leave next week for the award ceremony on Coruscant.	\N	2018-01-23 02:08:59.170783	2018-01-23 02:08:59.170783	362880	Joel Scalera
67	Lebron Blames Recent Loss on Hairline	Lebron James is the best basketball player in the world but even he has his kryptonite. After Saturday's loss to the Thunder Lebron said: "he was extra self conscious that day about his hairline". Lebron is actively involved with " The right to have hair foundation"	\N	2018-01-23 02:12:38.103631	2018-01-23 02:12:38.103631	6	Joel Scalera
68	Idaho to Become Independent Nation	It was agreed between the White House and the governor of Idaho that it will become an independent Country as of this Friday. Some residents are ecstatic while others are fleeing the state as quick as possible.	\N	2018-01-23 02:16:28.516156	2018-01-23 02:16:28.516156	5040	Joel Scalera
69	Cobol making a come back?	The programming language developed back in 1959 has seen a huge resurgence in 2017. It is predicted it will surpass Javascript as the most used language by mid 2018. No one knows what the cause for the rapid growth is. 	\N	2018-01-23 02:20:53.265693	2018-01-23 02:20:53.265693	24	Joel Scalera
70	Zelda on Xbox?	Nintendo just announced Wednesday that it is giving up it's license for the popular series. Xbox says it plans to quickly port Zelda Breath of The Wild over to Xbox one by late October of 2019.	\N	2018-01-23 02:23:04.910311	2018-01-23 02:28:39.987264	720	Joel Scalera
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joelscalera
--

SELECT pg_catalog.setval('posts_id_seq', 70, true);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: joelscalera
--

COPY schema_migrations (version) FROM stdin;
20180120010041
20170501195702
20180122224423
\.


--
-- PostgreSQL database dump complete
--
