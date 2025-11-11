import Navigation from '@/components/Navigation';
import { Button } from '@/components/mess/button';
import { Input } from '@/components/mess/input';
import { Label } from '@/components/mess/label';
import { Textarea } from '@/components/mess/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

// Sample book data - in real app, fetch by ID
const sampleBooks = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fiction',
        year: 2020,
        description: 'A dazzling novel about all the choices that go into a life well lived.',
        rating: 4.5,
    },
];

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = sampleBooks.find((b) => b.id === id);

    const [formData, setFormData] = useState({
        title: book?.title || '',
        author: book?.author || '',
        genre: book?.genre || '',
        year: book?.year || new Date().getFullYear(),
        description: book?.description || '',
        rating: book?.rating?.toString() || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Book updated successfully!');
        navigate(`/book/${id}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-background min-h-screen">
            <Navigation />

            <main className="container mx-auto max-w-2xl px-4 pt-24 pb-12">
                <Button variant="ghost" onClick={() => navigate(`/book/${id}`)} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Book
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Edit Book</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Book Title *</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter book title"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="author">Author *</Label>
                                <Input
                                    id="author"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    placeholder="Enter author name"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="genre">Genre *</Label>
                                    <Input
                                        id="genre"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={handleChange}
                                        placeholder="e.g., Fiction"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="year">Year Published</Label>
                                    <Input
                                        id="year"
                                        name="year"
                                        type="number"
                                        value={formData.year}
                                        onChange={handleChange}
                                        placeholder="2024"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="rating">Rating (0-5)</Label>
                                <Input
                                    id="rating"
                                    name="rating"
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    placeholder="4.5"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter book description..."
                                    rows={5}
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button type="submit" className="flex-1">
                                    Update Book
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => navigate(`/book/${id}`)}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default EditBook;
