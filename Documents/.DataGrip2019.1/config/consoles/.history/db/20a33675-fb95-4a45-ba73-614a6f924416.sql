SELECT DISTINCT 
	   [4årsPåmvår2019].Diarienummer, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].[Ärendets_huvudfastighet], MAX([4årsPåmvår2019].Riktning) AS rikt, MAX([4årsPåmvår2019].Händelsedatum) AS hd, MAX([4årsPåmvår2019].[Text]) AS mt, MAX([4årsPåmvår2019].Rubrik) AS rub
FROM [tempExcel].[dbo].[4årsPåmvår2019]
	 JOIN
(
	SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
	FROM
	(
		SELECT [Ärendets_huvudfastighet] AS Fj, [Diarienummer] AS Dj, [Kommentar] AS kj, MAX([Händelsedatum]) AS hj, ISNULL(MAX(CASE
																																WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
																																END), MAX(CASE
																																		  WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
																																		  END)) AS Uj, MAX([Rubrik]) AS rj
		FROM
		(
			SELECT orginal.[Ärendets_huvudfastighet], orginal.Kommentar, orginal.Diarienummer, filtered.[Text], filtered.Riktning, filtered.Händelsedatum, filtered.Rubrik
			FROM 
			[tempExcel].[dbo].[4årsPåmvår2019] AS orginal
				 OUTER APPLY
			(
				SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].[Text], [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
				FROM [tempExcel].[dbo].[4årsPåmvår2019]
				WHERE 
					  [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg' AND 
					  [4årsPåmvår2019].rubrik <> 'Mottagningskvitto' AND 
					  [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader' AND 
					  [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende' AND 
					  [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort' AND 
					  [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.' AND 
					  orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
					  orginal.[Text] = [4årsPåmvår2019].[Text] AND 
					  orginal.[Rubrik] = [4årsPåmvår2019].Rubrik AND 
					  orginal.[Riktning] = [4årsPåmvår2019].Riktning AND 
					  orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum AND 
					  orginal.[Kommentar] = [4årsPåmvår2019].Kommentar AND 
					  orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer
			) AS filtered
		) AS te
		GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
	) AS filter
	WHERE filter.Uj = 'F'
) AS filtered
	 ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
		filtered.Dj = [4årsPåmvår2019].Diarienummer AND 
		[4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND 
	  [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND 
	  [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
SELECT orginal.[Ärendets_huvudfastighet], orginal.Kommentar, orginal.Diarienummer, filtered.[Text], filtered.Riktning, filtered.Händelsedatum, filtered.Rubrik
			FROM 
			FirstDb.[dbo].[4årsPåmvår2019] AS orginal
				 OUTER APPLY
			(
				SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].[Text], [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
				FROM [tempExcel].[dbo].[4årsPåmvår2019]
				WHERE 
					  [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg' AND 
					  [4årsPåmvår2019].rubrik <> 'Mottagningskvitto' AND 
					  [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader' AND 
					  [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende' AND 
					  [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort' AND 
					  [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.' AND 
					  orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
					  orginal.[Text] = [4årsPåmvår2019].[Text] AND 
					  orginal.[Rubrik] = [4årsPåmvår2019].Rubrik AND 
					  orginal.[Riktning] = [4årsPåmvår2019].Riktning AND 
					  orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum AND 
					  orginal.[Kommentar] = [4årsPåmvår2019].Kommentar AND 
					  orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer
			) AS filtered
;-- -. . -..- - / . -. - .-. -.--
SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].[Text], [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
				FROM FirstDb.[dbo].[4årsPåmvår2019]
				WHERE 
					  [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg' AND 
					  [4årsPåmvår2019].rubrik <> 'Mottagningskvitto' AND 
					  [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader' AND 
					  [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende' AND 
					  [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort' AND 
					  [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.' AND 
					  orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
					  orginal.[Text] = [4årsPåmvår2019].[Text] AND 
					  orginal.[Rubrik] = [4årsPåmvår2019].Rubrik AND 
					  orginal.[Riktning] = [4årsPåmvår2019].Riktning AND 
					  orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum AND 
					  orginal.[Kommentar] = [4årsPåmvår2019].Kommentar AND 
					  orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer
			) AS filtered
;-- -. . -..- - / . -. - .-. -.--
SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].[Text], [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
				FROM FirstDb.[dbo].[4årsPåmvår2019]
				WHERE 
					  [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg' AND 
					  [4årsPåmvår2019].rubrik <> 'Mottagningskvitto' AND 
					  [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader' AND 
					  [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende' AND 
					  [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort' AND 
					  [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.' AND 
					  orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
					  orginal.[Text] = [4årsPåmvår2019].[Text] AND 
					  orginal.[Rubrik] = [4årsPåmvår2019].Rubrik AND 
					  orginal.[Riktning] = [4årsPåmvår2019].Riktning AND 
					  orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum AND 
					  orginal.[Kommentar] = [4årsPåmvår2019].Kommentar AND 
					  orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer
;-- -. . -..- - / . -. - .-. -.--
SELECT DISTINCT 
	   [4årsPåmvår2019].Diarienummer, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].[Ärendets_huvudfastighet], MAX([4årsPåmvår2019].Riktning) AS rikt, MAX([4årsPåmvår2019].Händelsedatum) AS hd, MAX([4årsPåmvår2019].[Text]) AS mt, MAX([4årsPåmvår2019].Rubrik) AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
	 JOIN
(
	SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
	FROM
	(
		SELECT [Ärendets_huvudfastighet] AS Fj, [Diarienummer] AS Dj, [Kommentar] AS kj, MAX([Händelsedatum]) AS hj, ISNULL(MAX(CASE
																																WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
																																END), MAX(CASE
																																		  WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
																																		  END)) AS Uj, MAX([Rubrik]) AS rj
		FROM
		(
			SELECT orginal.[Ärendets_huvudfastighet], orginal.Kommentar, orginal.Diarienummer, filtered.[Text], filtered.Riktning, filtered.Händelsedatum, filtered.Rubrik
			FROM 
			FirstDb.[dbo].[4årsPåmvår2019] AS orginal
				 OUTER APPLY
			(
				SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].[Text], [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
				FROM FirstDb.[dbo].[4årsPåmvår2019]
				WHERE 
					  [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg' AND 
					  [4årsPåmvår2019].rubrik <> 'Mottagningskvitto' AND 
					  [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader' AND 
					  [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende' AND 
					  [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort' AND 
					  [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.' AND 
					  orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
					  orginal.[Text] = [4årsPåmvår2019].[Text] AND 
					  orginal.[Rubrik] = [4årsPåmvår2019].Rubrik AND 
					  orginal.[Riktning] = [4årsPåmvår2019].Riktning AND 
					  orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum AND 
					  orginal.[Kommentar] = [4årsPåmvår2019].Kommentar AND 
					  orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer
			) AS filtered
		) AS te
		GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
	) AS filter
	WHERE filter.Uj = 'F'
) AS filtered
	 ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND 
		filtered.Dj = [4årsPåmvår2019].Diarienummer AND 
		[4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND 
	  [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND 
	  [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
)
RETURNS TABLE
AS
RETURN

    SELECT [4årsPåmvår2019].[Ärendets_huvudfastighet],
                                           [4årsPåmvår2019].[Text],
                                           [4årsPåmvår2019].Rubrik,
                                           [4årsPåmvår2019].Riktning,
                                           [4årsPåmvår2019].Händelsedatum,
                                           [4årsPåmvår2019].Kommentar,
                                           [4årsPåmvår2019].Diarienummer
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND orginal.[Ärendets_huvudfastighet] = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND orginal.[Text] = [4årsPåmvår2019].[Text]
                                      AND orginal.[Rubrik] = [4årsPåmvår2019].Rubrik
                                      AND orginal.[Riktning] = [4årsPåmvår2019].Riktning
                                      AND orginal.[Händelsedatum] = [4årsPåmvår2019].Händelsedatum
                                      AND orginal.[Kommentar] = [4årsPåmvår2019].Kommentar
                                      AND orginal.[Diarienummer] = [4årsPåmvår2019].Diarienummer)


--with filtered as (),

SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered()
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub;
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet nvarchar(50),
    @Text                    nvarchar(max),
    @Rubrik                  nvarchar(max),
    @Riktning                nvarchar(50),
    @Händelsedatum           datetime2,
    @Kommentar               nvarchar(max),
    @Diarienummer            nvarchar(max)

)
RETURNS TABLE
AS
RETURN
    SELECT [Ärendets_huvudfastighet],
                                           [Text],
                                           Rubrik,
                                           Riktning,
                                           Händelsedatum,
                                           Kommentar,
                                           Diarienummer
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer;


--with filtered as (),
IF EXISTS (SELECT * FROM sys.objects WHERE OBJECT_ID = OBJECT_ID(N'[filteredt]') AND type IN (N'IF'))
BEGIN
   DROP FUNCTION dbo.filtered
END
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet nvarchar(50),
    @Text                    nvarchar(max),
    @Rubrik                  nvarchar(max),
    @Riktning                nvarchar(50),
    @Händelsedatum           datetime2,
    @Kommentar               nvarchar(max),
    @Diarienummer            nvarchar(max)

)
RETURNS TABLE
AS
RETURN
    SELECT [Ärendets_huvudfastighet],
                                           [Text],
                                           Rubrik,
                                           Riktning,
                                           Händelsedatum,
                                           Kommentar,
                                           Diarienummer
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer;


SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                      select * from
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet,
                                           [4årsPåmvår2019].Text,
                                           [4årsPåmvår2019].Rubrik,
                                           [4årsPåmvår2019].Riktning,
                                           [4årsPåmvår2019].Händelsedatum,
                                           [4årsPåmvår2019].Kommentar,
                                           [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub;
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet nvarchar(50),
    @Text                    nvarchar(max),
    @Rubrik                  nvarchar(max),
    @Riktning                nvarchar(50),
    @Händelsedatum           datetime2,
    @Kommentar               nvarchar(max),
    @Diarienummer            nvarchar(max)

)
RETURNS TABLE
AS
RETURN
    SELECT [Ärendets_huvudfastighet],
                                           [Text],
                                           Rubrik,
                                           Riktning,
                                           Händelsedatum,
                                           Kommentar,
                                           Diarienummer
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer;


SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                      select * from
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet,
                                           [4årsPåmvår2019].Text,
                                           [4årsPåmvår2019].Rubrik,
                                           [4årsPåmvår2019].Riktning,
                                           [4årsPåmvår2019].Händelsedatum,
                                           [4årsPåmvår2019].Kommentar,
                                           [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet nvarchar(50),
    @Text                    nvarchar(max),
    @Rubrik                  nvarchar(max),
    @Riktning                nvarchar(50),
    @Händelsedatum           datetime2,
    @Kommentar               nvarchar(max),
    @Diarienummer            nvarchar(max)

)
RETURNS TABLE
AS
RETURN
    SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer;


SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                      select * from
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet,
                                           [4årsPåmvår2019].Text,
                                           [4årsPåmvår2019].Rubrik,
                                           [4årsPåmvår2019].Riktning,
                                           [4årsPåmvår2019].Händelsedatum,
                                           [4årsPåmvår2019].Kommentar,
                                           [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet nvarchar(50),
    @Text                    nvarchar(max),
    @Rubrik                  nvarchar(max),
    @Riktning                nvarchar(50),
    @Händelsedatum           datetime2,
    @Kommentar               nvarchar(max),
    @Diarienummer            nvarchar(max)

)
RETURNS TABLE
AS
RETURN
   ( SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer
;-- -. . -..- - / . -. - .-. -.--
SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                      select * from
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet,
                                           [4årsPåmvår2019].Text,
                                           [4årsPåmvår2019].Rubrik,
                                           [4årsPåmvår2019].Riktning,
                                           [4årsPåmvår2019].Händelsedatum,
                                           [4årsPåmvår2019].Kommentar,
                                           [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet as nvarchar(50),
    @Text  as                   nvarchar(max),
    @Rubrik    as              nvarchar(max),
    @Riktning       as         nvarchar(50),
    @Händelsedatum        as   datetime2,
    @Kommentar      as         nvarchar(max),
    @Diarienummer   as         nvarchar(max)

)
RETURNS TABLE
AS
RETURN
   ( SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
                                      AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                                      AND @Text = [4årsPåmvår2019].[Text]
                                      AND @Rubrik  = [4årsPåmvår2019].Rubrik
                                      AND @Riktning  = [4årsPåmvår2019].Riktning
                                      AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                                      AND @Kommentar  = [4årsPåmvår2019].Kommentar
                                      AND @Diarienummer  = [4årsPåmvår2019].Diarienummer)
;-- -. . -..- - / . -. - .-. -.--
SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                           select [4årsPåmvår2019].Ärendets_huvudfastighet,
                                  [4årsPåmvår2019].Text,
                                  filtered.Rubrik,
                                  filtered.Riktning,
                                  filtered.Händelsedatum,
                                  filtered.Kommentar,
                                  [4årsPåmvår2019].Diarienummer
                           from
                            [4årsPåmvår2019]
                                    OUTER APPLY
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet, [4årsPåmvår2019].Text, [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar,  [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                           select [4årsPåmvår2019].Ärendets_huvudfastighet,
                                  [4årsPåmvår2019].Text,
                                  filtered.Rubrik,
                                  filtered.Riktning,
                                  filtered.Händelsedatum,
                                  filtered.Kommentar,
                                  [4årsPåmvår2019].Diarienummer
                           from
                            [4årsPåmvår2019]
                                    left outer join
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet, [4årsPåmvår2019].Text, [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar,  [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
--and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
drop function filtered
;-- -. . -..- - / . -. - .-. -.--
CREATE FUNCTION filtered (
   @Ärendets_huvudfastighet as nvarchar(50),
    @Text  as                   nvarchar(max),
    @Rubrik    as              nvarchar(max),
    @Riktning       as         nvarchar(50),
    @Händelsedatum        as   datetime2,
    @Kommentar      as         nvarchar(max),
    @Diarienummer   as         nvarchar(max)

)
RETURNS TABLE
AS
RETURN
   ( SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
            AND @Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
               AND @Text = [4årsPåmvår2019].[Text]
                AND @Rubrik  = [4årsPåmvår2019].Rubrik
                AND @Riktning  = [4årsPåmvår2019].Riktning
                  AND @Händelsedatum   = [4årsPåmvår2019].Händelsedatum
                   AND @Kommentar  = [4årsPåmvår2019].Kommentar
                   AND @Diarienummer  = [4årsPåmvår2019].Diarienummer
             )
;-- -. . -..- - / . -. - .-. -.--
SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                           select [4årsPåmvår2019].Ärendets_huvudfastighet,
                                  [4årsPåmvår2019].Text,
                                  filtered.Rubrik,
                                  filtered.Riktning,
                                  filtered.Händelsedatum,
                                  filtered.Kommentar,
                                  [4årsPåmvår2019].Diarienummer
                           from
                            [4årsPåmvår2019]
                                    left outer join
                                filtered([4årsPåmvår2019].Ärendets_huvudfastighet, [4årsPåmvår2019].Text, [4årsPåmvår2019].Rubrik, [4årsPåmvår2019].Riktning, [4årsPåmvår2019].Händelsedatum, [4årsPåmvår2019].Kommentar,  [4årsPåmvår2019].Diarienummer)
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
        and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <>
                                          'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

             )


SELECT DISTINCT [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Kommentar,
                [4årsPåmvår2019].[Ärendets_huvudfastighet],
                MAX([4årsPåmvår2019].Riktning)      AS rikt,
                MAX([4årsPåmvår2019].Händelsedatum) AS hd,
                MAX([4årsPåmvår2019].[Text])        AS mt,
                MAX([4årsPåmvår2019].Rubrik)        AS rub
FROM FirstDb.[dbo].[4årsPåmvår2019]
         JOIN
     (
         SELECT filter.Fj, filter.Dj, filter.kj, filter.hj, filter.Uj, filter.rj
         FROM (
                  SELECT [Ärendets_huvudfastighet] AS Fj,
                         [Diarienummer]            AS Dj,
                         [Kommentar]               AS kj,
                         MAX([Händelsedatum])      AS hj,
                         ISNULL(MAX(CASE
                                        WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                             END), MAX(CASE
                                           WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                             END))                 AS Uj,
                         MAX([Rubrik])             AS rj
                  FROM (
                           select [4årsPåmvår2019].Ärendets_huvudfastighet,
                                  [4årsPåmvår2019].Text,
                                  filtered.Rubrik,
                                  filtered.Riktning,
                                  filtered.Händelsedatum,
                                  filtered.Kommentar,
                                  [4årsPåmvår2019].Diarienummer
                           from
                            [4årsPåmvår2019]
                                    left outer join
                                filtered on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
               AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik  = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                  AND filtered.Händelsedatum  = [4årsPåmvår2019].Händelsedatum
                   AND filtered.Kommentar  = [4årsPåmvår2019].Kommentar
                   AND filtered.Diarienummer  = [4årsPåmvår2019].Diarienummer
                       ) AS te
                  GROUP BY te.[Ärendets_huvudfastighet], te.Diarienummer, te.Kommentar
              ) AS filter
         WHERE filter.Uj = 'F'
     ) AS filtered
     ON filtered.Fj = [4årsPåmvår2019].[Ärendets_huvudfastighet] AND
        filtered.Dj = [4årsPåmvår2019].Diarienummer AND
        [4årsPåmvår2019].Händelsedatum = filtered.hj
        and filtered.rj = [Rubrik]
WHERE [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
  AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'
GROUP BY [4årsPåmvår2019].[Ärendets_huvudfastighet], [4årsPåmvår2019].Kommentar, [4årsPåmvår2019].Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
E
;-- -. . -..- - / . -. - .-. -.--
filtered
;-- -. . -..- - / . -. - .-. -.--
filtered as (SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
             )
;-- -. . -..- - / . -. - .-. -.--
SELECT *
                                    FROM FirstDb.[dbo].[4årsPåmvår2019]
                                    WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                                      AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                                      AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                                      AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                                      AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                                      AND [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik,Händelsedatum),
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'   
    
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text
)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te
                

         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041' 
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik),
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
    
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text
    order by Händelsedatum desc 
)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik),
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text
    order by Händelsedatum desc
)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik),
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik),max(Händelsedatum),
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text
    
)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, rub
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.[Text] = [4årsPåmvår2019].[Text]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, 7
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Riktning = [4årsPåmvår2019].Riktning
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, 7
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Kommentar = [4årsPåmvår2019].Kommentar
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, 7
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                Kommentar,
                [Ärendets_huvudfastighet],
                MAX(Riktning)      AS rikt,
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Riktning,
                filtered.Händelsedatum,
                filtered.Kommentar,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'
GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer
ORDER BY mt DESC, 7
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,
                
                [Ärendets_huvudfastighet],
                
                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,

                [Ärendets_huvudfastighet],

                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te


         WHERE filtered.Uj = 'F' and Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
    and filtered.Uj = 'F'
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,

                [Ärendets_huvudfastighet],

                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT Diarienummer,

                [Ärendets_huvudfastighet],

                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
Diarienummer,
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                MAX(Händelsedatum) AS hd,
                MAX([Text])        AS mt,
                MAX(Rubrik)        AS rub
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                Händelsedatum,
                [Text],
                Rubrik
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY mt DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                Händelsedatum,
                [Text],
                Rubrik
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC, Text
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                Händelsedatum,
                [Text],
                Rubrik
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                Händelsedatum,
                [Text],
                Rubrik
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer and uj <> 'T'
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                Diarienummer,
                [Ärendets_huvudfastighet],

                Händelsedatum,
                [Text],
                filtered.Uj,
                Rubrik
                FROM (
                select [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                left outer join
                filtered
                on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
                ) AS te

        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,[4årsPåmvår2019].Text,filtered.Rubrik,filtered.Händelsedatum,[4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         Diarienummer <> 'MBNV-2019-3007' AND Diarienummer <> 'MBNV-2019-3030' AND Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer, Text

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer,
                filtered.Uj
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'

    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,filtered.Rubrik,
                filtered.Händelsedatum,
                [4årsPåmvår2019].Diarienummer,
                filtered.Uj
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT [Ärendets_huvudfastighet], Diarienummer, max(Rubrik) as rubrik,max(Händelsedatum) as händelsedatum ,
                ISNULL(MAX(CASE
                WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T'
                END), MAX(CASE
                WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F'
                END))                 AS Uj
                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <>
                        'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Text,
                [4årsPåmvår2019].Diarienummer,
                filtered.Rubrik,
                filtered.Händelsedatum,
                filtered.Uj
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030' AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT
           [Ärendets_huvudfastighet],
           Diarienummer, max(Rubrik) as rubrik,
           max(Händelsedatum) as händelsedatum
           , ISNULL(MAX(CASE WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T' END), MAX(CASE WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F' END)) AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                filtered.Uj
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                   and [4årsPåmvår2019].Diarienummer = ( select top (1) Diarienummer from filtered where filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet] order by Ärendets_huvudfastighet desc )
                           
                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
          AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
          AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC
;-- -. . -..- - / . -. - .-. -.--
with filtered as (
    SELECT
           [Ärendets_huvudfastighet],
           Diarienummer, max(Rubrik) as rubrik,
           max(Händelsedatum) as händelsedatum
           , ISNULL(MAX(CASE WHEN [Rubrik] = 'Avlopp - utförandeintyg' THEN 'T' END), MAX(CASE WHEN [Rubrik] <> 'Avlopp - utförandeintyg' THEN 'F' END)) AS Uj

                  FROM FirstDb.[dbo].[4årsPåmvår2019]
                  WHERE [4årsPåmvår2019].rubrik <> 'Uppföljning utförandeintyg'
                    AND [4årsPåmvår2019].rubrik <> 'Mottagningskvitto'
                    AND [4årsPåmvår2019].rubrik <> 'Påminnelse om åtgärd - 18 månader'
                    AND [4årsPåmvår2019].rubrik <> 'Fakturering av avloppsärende'
                    AND [4årsPåmvår2019].Rubrik <> 'Bekräftelsekort'
                    AND [4årsPåmvår2019].[Text] <> 'Ärendet skickat till Länsstyrelsen för bedömning om dispens gällande riksintresse Gotlands kusten.'
    GROUP BY [Ärendets_huvudfastighet], Kommentar, Diarienummer

)
SELECT DISTINCT
                [4årsPåmvår2019].Ärendets_huvudfastighet,
                [4årsPåmvår2019].Diarienummer,
                [4årsPåmvår2019].Text,
                filtered.Rubrik,
                filtered.Händelsedatum,
                filtered.Uj
                from [4årsPåmvår2019]
                    left outer join
                    filtered
                    on filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet]
                   and [4årsPåmvår2019].Diarienummer = ( select top (1) Diarienummer from filtered where filtered.Ärendets_huvudfastighet = [4årsPåmvår2019].[Ärendets_huvudfastighet] order by Ärendets_huvudfastighet desc )

                    AND filtered.Rubrik = [4årsPåmvår2019].Rubrik
                    AND filtered.Händelsedatum = [4årsPåmvår2019].Händelsedatum
                    AND filtered.Diarienummer = [4årsPåmvår2019].Diarienummer
        where
         [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3007'
          AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3030'
          AND [4årsPåmvår2019].Diarienummer <> 'MBNV-2019-3041'

ORDER BY text DESC