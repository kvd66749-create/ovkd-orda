-- Only clients can view published news
CREATE POLICY "Clients can view published news"
  ON news FOR SELECT
  USING (
    auth.uid() IS NOT NULL       -- кез келген аутентификацияланған қолданушы
    AND status = 'published'      -- тек жарияланған жаңалықтар
  );
