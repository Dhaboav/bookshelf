import Navigation from '@/components/Navigation';
import { Button } from '@/components/mess/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/mess/card';
import { Input } from '@/components/mess/input';
import { Label } from '@/components/mess/label';
import { Textarea } from '@/components/mess/textarea';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AddBook = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        year: new Date().getFullYear(),
        description: '',
        rating: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Book added successfully!');
        navigate('/dashboard');
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
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Library
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Add New Book</CardTitle>
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
                                    Add Book
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => navigate('/dashboard')}
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

export default AddBook;
