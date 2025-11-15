import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import type { BookFormValues } from '@/hooks/useBookForm';

interface BookFormProps {
    titleForm: string;
    values: BookFormValues;
    btnSaveTitle: string;
    onChange: (field: keyof BookFormValues, value: BookFormValues[keyof BookFormValues]) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

function BookForm({
    titleForm,
    values,
    btnSaveTitle,
    onChange,
    onSubmit,
    onCancel,
}: BookFormProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">{titleForm}</CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    <div className="space-y-2">
                        <Label>
                            Book Title <span className="text-red-600">*</span>
                        </Label>
                        <Input
                            value={values.title}
                            onChange={(e) => onChange('title', e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Author <span className="text-red-600">*</span>
                        </Label>
                        <Input
                            value={values.author}
                            onChange={(e) => onChange('author', e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>
                                Genre <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                value={values.genre}
                                onChange={(e) => onChange('genre', e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>
                                Year <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                type="number"
                                value={values.year}
                                onChange={(e) => onChange('year', Number(e.target.value))}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            rows={4}
                            value={values.description}
                            onChange={(e) => onChange('description', e.target.value)}
                        />
                    </div>

                    <div className="flex gap-3">
                        <Button type="submit" className="flex-1">
                            {btnSaveTitle}
                        </Button>
                        <Button
                            type="button"
                            variant="delete"
                            onClick={onCancel}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export { BookForm };
