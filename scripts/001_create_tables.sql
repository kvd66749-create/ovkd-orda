-- Клиент жаңалықтарды тек жарияланғандарын көре алады
CREATE POLICY "Clients can view published news"
  ON news FOR SELECT
  TO authenticated
  USING (status = 'published');

-- Services кестесінен тек активті қызметтер
CREATE POLICY "Clients can view active services"
  ON services FOR SELECT
  TO authenticated
  USING (status = 'active');

-- Doctors кестесінен тек активті дәрігерлер
CREATE POLICY "Clients can view active doctors"
  ON doctors FOR SELECT
  TO authenticated
  USING (status = 'active');
