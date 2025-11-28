-- Барлық жарияланған жаңалықтарды алу
SELECT * FROM news 
WHERE is_published = true 
ORDER BY created_at DESC;

-- Жаңалықпен байланысты PDF-ті алу
SELECT d.* FROM documents d
INNER JOIN news n ON d.id = n.document_id
WHERE n.id = $1;
